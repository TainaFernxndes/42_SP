#!/bin/bash

if [ "$#" -eq 0 ]; then
 echo "No arguments supplied"

else 
	i=0

	for arg in "$@"; do
	if [ "$i" -ge 3 ]; then
	break
	fi 
	echo "$arg"
	((i++))
	done

fi
