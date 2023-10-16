#!/bin/bash

 if [ ! -f "./.env" ]; then
   echo "Secrets not found. Pulling files from Bitwarden..."
   if [[ -z "${BW_PASSWORD}" ]]; then
     echo "Error: BW_PASSWORD envvar is not defined. Please inject BW_PASSWORD into container!"
     exit 1;
   fi

   npm install -g @bitwarden/cli fx
   # get secrets
   bw logout
   export BW_SESSION=$(bw login product@bitsofgood.org ${BW_PASSWORD} --raw);
   bw sync --session $BW_SESSION
   bw get item c187f74b-9b9c-402b-9999-af2b0020cc70 | fx .notes > ".env"

   echo "Secrets successfully retrieved."
 fi

 npm run start:tunnel
