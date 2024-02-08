#!/bin/bash

# ----------------------------------------------------------------------------------------------------------------------
# This script is used to automate docs process.
#
# pnpm docs:ts <true>(optional - If true, code will be pushed to the remote)
#
# Example: "pnpm docs:ts true" or "pnpm docs:ts"
# ----------------------------------------------------------------------------------------------------------------------
checkInToGit=$1

# Create docs
typedoc

# If checkInToGit is true, then execute below commands
if [ "$checkInToGit" = "true" ]; then
  # Add new file to git
  git add docs

  # Commit changes
  git commit -m "docs: Updated documentation"

  # Check-in file to git
  git push
fi
