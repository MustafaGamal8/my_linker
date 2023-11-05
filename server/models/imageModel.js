const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String
});

const ImageModel = mongoose.model('Image', ImageSchema);

module.exports = ImageModel;
