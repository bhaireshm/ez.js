#!/bin/bash
# ----------------------------------------------------------------------------------------------------------------------
# This script is used to automate release process.
# Explanation: This script will pull all latest changes from master and checkout release branch from master
# with specified version and then bump up package version and commit them.
# After that merge release branch into master with appropriate tags.
#
# npm run release <version> <message>(optional)
#
# Example: "npm run release 1.2.3"
# ----------------------------------------------------------------------------------------------------------------------

# Stop on first error
set -e

if [[ ! $1 =~ ^v?[0-9]+(\.[0-9]+){2}(-[a-z]+\.\d+)?$ ]]; then
  echo "A valid version must be provided as the first argument."
  exit 1
fi

ver=${1/v/}
msg=$2

[[ -z $msg ]] && msg="Released"

# Update the master branch to the latest
git checkout master

# Create a release brach off of it.
git checkout -b release/$ver

# Bump version in package.json, but do not create a git tag
npm run version $ver --no-git-tag-version

# Inject the current release version and date into the CHANGELOG file
today=$(date +%d-%m-%Y\ %T)
changelog="## $ver: $msg"

# Find all commits between the HEAD on master and the latest tag on master, and pipe their messages into the clipboard
# commits=$(git log $(git describe --tags master --abbrev=0)..HEAD --merges --pretty=format:'* %s')
commits=$(git log --pretty=format:"(%h) %s %d [%an]%n" --grep="fix:\|feat:\|update:")

cat >$changelog <<X
$changelog
$commits
X

echo "$changelog" | cat - CHANGELOG.md >temp && mv temp CHANGELOG.md

# Create the release
git add CHANGELOG.md package.json
git commit -am "$msg"

# Merge the release branch into master, create a tag and push
git checkout master
git merge --no-ff release/$ver # fast-forward
git tag -a "$ver" -m "$msg"
git push origin master --follow-tags

git branch -d release/$ver

# clear variables
unset msg ver
