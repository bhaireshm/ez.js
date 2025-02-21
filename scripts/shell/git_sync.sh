#!/bin/sh

loop=1
i=0
GIT_STATUS=$(git status -s)

while [ $i -lt $loop && $GIT_STATUS -eq "" ]; do
  # todo: get all branchs and loop through all the branchs and update.
  git checkout configs && git push
  git checkout docs && git push
  git checkout features/tasks && git push
  git checkout issues/known && git push
  git checkout master && git push

  $i=$i+1
done
