#!/bin/bash

if [[ $# -eq 0 ]]
then
	echo "please enter the component name"
	exit 1
fi

ng g component $1

exit 0
