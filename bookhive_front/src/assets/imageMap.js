// src/assets/imageMap.js

// Import all PNG images from /images/ subfolder
const images = import.meta.glob('./images/**/*.png', { eager: true });

// Create a map of relative filenames to their URLs
const getImage = {};
for (const path in images) {
  // Extract just the filename (e.g., 'MacBookAir1_Vector_3.png')
  const fileName = path.split('/').pop();
  getImage[fileName] = images[path].default;
}

/**
 * Returns the image path for a given filename or a fallback image.
 * @param {string} filename - e.g., 'MacBookAir1_Vector_3.png'
 * @returns {string} - image URL or fallback
 */
const imageMap = (filename) => {
  return getImage[filename] || getImage['questionMark.png'] || '';
};

export default imageMap;
