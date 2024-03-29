#!/bin/bash

for branch in $(git for-each-ref --format='%(refname:short)' refs/heads/); do
  git checkout $branch
  git push origin $branch
done
