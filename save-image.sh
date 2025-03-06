#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# Download the image
echo "Downloading workspace image..."
curl -o public/images/workspace-image.jpg https://raw.githubusercontent.com/grayghostdataconsultants/incubizo-website-assets/main/workspace-image.jpg

# Check if the download was successful
if [ $? -eq 0 ]; then
  echo "Image downloaded successfully!"
else
  echo "Failed to download image."
fi 