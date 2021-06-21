#!/bin/sh
# Redirect output to stderr.
exec 1>&2
# enable user input
exec < /dev/tty

consoleregexp='console\.log'
# CHECK
if test $(git diff --cached | grep $consoleregexp | wc -l) != 0
then
  echo "=============================================================="
  exec git diff --cached | grep -ne $consoleregexp
  echo "=============================================================="
  echo "There are some occurrences of console"".""log in modified files."
  exit 1;
fi