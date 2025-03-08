#!/bin/bash

# Navigate to backend and start it in the background
cd api
npm install
npm run start &
echo "Backend started on port 5001"

# Navigate to frontend, install dependencies, build, and start it
cd ../ui
npm install
npm run build
npm run start
echo "Frontend started on port 8080"