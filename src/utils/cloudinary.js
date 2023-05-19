require('dotenv').config();
// const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_URL} = process.env;

CLOUDINARY_CLOUD_NAME='dnykabhqk'
CLOUDINARY_API_KEY='747326322879863'
CLOUDINARY_API_SECRET='fTTZwlFdqL-pv9DiE6YCK4ed5Ng'
CLOUDINARY_URL='cloudinary://747326322879863:fTTZwlFdqL-pv9DiE6YCK4ed5Ng@dnykabhqk'

const cloudinary = require("cloudinary").v2;

// Configuration 
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
  });

  module.exports = cloudinary;