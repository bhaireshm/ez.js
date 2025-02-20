#!/bin/bash
# ----------------------------------------------------------------------------------------------------------------------
# This script is used to automate release process.
# Explanation: This script will pull all latest changes from $defaultBranch and checkout release branch from $defaultBranch
# with specified version and then bump up package version and commit them.
# After that merge release branch into $defaultBranch with appropriate tags.
#
# npm run release <version> <message>(optional)
#
# Example: "npm run release 1.2.3"
# ----------------------------------------------------------------------------------------------------------------------

# Stop on first error
set -e

version=$1

if [[ ! $1 =~ ^v?[0-9]+(\.[0-9]+){2}(-[a-z]+\.\d+)?$ ]]; then
  echo "Invalid Semantic Version: $version, a valid version must be provided as the first argument."
  exit 1
fi

ver=${1/v/}
msg=$2
defaultBranch="master"
curr_branch=$(git branch --show-current)

if [[ $curr_branch -ne $defaultBranch ]]; then
  echo "Not in '$defaultBranch' branch, please checkout '$defaultBranch' first, and take all the latest code."
  echo "Executing git checkin..."
  git push origin $curr_branch
  exit 1
fi

# Update documentation
pnpm docs:ts true

# Create a release branch from $defaultBranch.
git checkout -b release/$ver

# Bump version in package.json, but do not create a git tag
npm version $ver --no-git-tag-version

# Inject the current release version and date into the CHANGELOG file
node ./src/scripts/changelog.js $ver $msg

# Create the release
git add CHANGELOG.md package.json
git commit -am "release: v$ver"

# Merge the release branch into $defaultBranch, create a tag and push
git checkout $defaultBranch
git merge --no-ff release/$ver
git tag -a "v$ver" -m "release-v$ver"
git push origin $defaultBranch --follow-tags

# Remove release branch
git branch -d release/$ver

# clear variables
unset msg ver defaultBranch

# Publish to NPM
npm publish --access public
