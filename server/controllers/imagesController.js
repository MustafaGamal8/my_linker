 const { default: mongoose } = require("mongoose");
const asyncHandler = require("../middlewares/asyncHandler");
const ImageModel = require("../models/imageModel");


const getImage = asyncHandler(async (req, res) => {
  const idToLookup = req.params.id;
  
  if (!mongoose.Types.ObjectId.isValid(idToLookup)) {
    return res.status(404).send('Image id is not valid');
  }
  const image = await ImageModel.findById(idToLookup);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.setHeader('Content-Type', image.contentType);
    res.send(image.data);
})



module.exports = {
  getImage
}