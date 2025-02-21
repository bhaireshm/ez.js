#!/bin/sh

echo "Initial setup..."

chmod 777 "$PWD/scripts/generate-docs.sh"
chmod 777 "$PWD/scripts/release.sh"
chmod 777 "$PWD/scripts/setup.sh"
chmod 777 "$PWD/scripts/update-all-branchs-to-default.sh"

# Git hooks custom path
CUSTOM_HOOKS_PATH="$PWD/.hooks"
git config --local core.hooksPath $CUSTOM_HOOKS_PATH

chmod 777 $CUSTOM_HOOKS_PATH/pre-commit

echo "Git hooks custom path '$CUSTOM_HOOKS_PATH' updated."
