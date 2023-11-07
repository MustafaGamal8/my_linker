const asyncHandler = require("../middlewares/asyncHandler");
const ImageModel = require("../models/imageModel");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken")





const getAllUsers = asyncHandler(async (req, res) => {
    const key = req.query.key

  if (key && key == "mustafa") {
    const users = await UserModel.find()
    return res.send(users)
  }
  res.send("حط الباسوورد 😉")

})


const getUser = asyncHandler(async (req, res) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({ error: "لم يتم العثور على المستخدم" });
  }
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const user = await UserModel.findById(decodedToken.userId);

  if (!user) {
    return res.status(400).json({ error: "لم يتم العثور على المستخدم" });
  }

  res.json({"message":"تم جلب البيانات",user:{
    email:user.email,
    displayName:user.displayName,
    details:user.details
  }})

})


const handelInitalizeUser = asyncHandler(async (req, res) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({ error: "لم يتم العثور على المستخدم" });
  }
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const user = await UserModel.findById(decodedToken.userId);

  if (!user) {
    return res.status(400).json({ error: "لم يتم العثور على المستخدم" });
  }
  user.displayName = req.body.displayName
  user.details = req.body.details
  await user.save()
  res.status(200).json({"message":"تم تحديث البيانات بنجاح"})
})

const handleUserDataUpdate = asyncHandler(async (req, res) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({ error: "No user found" });
  }
  
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await UserModel.findById(decodedToken.userId);

    if (!user) {
      return res.status(400).json({ error: "No user found" });
    }


    // Parse and update other details if provided
    if (req.body.details) {
      const detailsUpdates = JSON.parse(req.body.details);
      Object.assign(user.details, detailsUpdates);
    }

    // Function to save image data and return the image document ID
    const saveImageAndGetId = async (file) => {
      const image = new ImageModel({
        data: file.buffer,
        contentType: file.mimetype
      });
      const savedImage = await image.save();
      return savedImage._id.toString();
    };

    // Save profile picture
    if (req.files['pictureFile']) {
      const pictureId = await saveImageAndGetId(req.files['pictureFile'][0]);
      user.details.pictureUrl = pictureId; 
    }

    // Save cover image
    if (req.files['coverFile']) {
      const coverId = await saveImageAndGetId(req.files['coverFile'][0]);
      user.details.coverUrl = coverId; // Store the image document ID as a reference
    }
    

    // Save project images and update user model with the image IDs
    if (req.files['projectImagesFile']) {
      req.files['projectImagesFile'].forEach(async (file, index) => {
        const projectIndex = req.body.projectIndexs[index];
        const imageId = await saveImageAndGetId(file);
        user.details.projects[projectIndex].imgUrl = imageId;
      });
    }
    

    await user.save();
    console.log(user.details);
    res.status(200).json({ message: "تم تحديث البيانات بنجاح", userDetails: user.details });
  
});




module.exports = {
  getAllUsers,
  getUser,
  handelInitalizeUser,
  handleUserDataUpdate
}