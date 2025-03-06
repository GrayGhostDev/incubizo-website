const fs = require('fs');
const https = require('https');
const path = require('path');

// URL of the image to download
const imageUrl = 'https://raw.githubusercontent.com/grayghostdataconsultants/incubizo-website-assets/main/workspace-image.jpg';

// Path where to save the image
const imagePath = path.join(__dirname, 'public', 'workspace-image.jpg');

console.log(`Downloading image from ${imageUrl} to ${imagePath}...`);

// Create a write stream to save the image
const file = fs.createWriteStream(imagePath);

// Download the image
https.get(imageUrl, (response) => {
  // Check if the response is successful
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    file.close();
    fs.unlinkSync(imagePath); // Delete the file if download failed
    return;
  }

  // Pipe the response to the file
  response.pipe(file);

  // Handle errors during download
  file.on('error', (err) => {
    console.error(`Error writing to file: ${err.message}`);
    file.close();
    fs.unlinkSync(imagePath); // Delete the file if there was an error
  });

  // When the download is complete
  file.on('finish', () => {
    file.close();
    console.log('Image downloaded successfully!');
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
  file.close();
  fs.unlinkSync(imagePath); // Delete the file if there was an error
}); 