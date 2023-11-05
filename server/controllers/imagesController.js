 const asyncHandler = require("../middlewares/asyncHandler");
const ImageModel = require("../models/imageModel");


const getImage = asyncHandler(async (req, res) => {
  const image = await ImageModel.findById(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.setHeader('Content-Type', image.contentType);
    res.send(image.data);
})



module.exports = {
  getImage
}