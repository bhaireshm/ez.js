#!/bin/bash

check_semver() {
  # Define the regular expression for valid semantic version
  semver_pattern="^([0-9]\d*)\.([0-9]\d*)\.([0-9]\d*)(-([0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*))?(\+([0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*))?$"

  # Check if the provided string matches the pattern
  if [[ $1 =~ $semver_pattern ]]; then
    echo "$1 is a valid semantic version."
  else
    echo "$1 is not a valid semantic version."
  fi
}

# Test the script with the provided versions
# versions=("0.0.4" "1.2.3-rc.1" "10.20.30-rc1" "1.1.2-prerelease+meta" "1.0.0-alpha" "1" "alpha" "alpha." "-alpha.")

# for version in "${versions[@]}"; do
check_semver "$1"
# done
