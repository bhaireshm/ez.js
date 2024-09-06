#!/bin/sh

echo "Init setup..."

# Variables
CUSTOM_HOOKS_PATH="$PWD/.hooks"

echo "Adding permissions..."
chmod 755 $PWD/src/scripts
chmod 755 $CUSTOM_HOOKS_PATH

# Git hooks custom path
git config --local core.hooksPath $CUSTOM_HOOKS_PATH
echo "Git hooks custom path '$CUSTOM_HOOKS_PATH' updated."
