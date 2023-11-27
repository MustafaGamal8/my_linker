const asyncHandler = require("../middlewares/asyncHandler");
const ImageModel = require("../models/imageModel");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken")


const uploadImages = async (req, user, updatedDetails) => {
  const saveImageAndGetId = async (file) => {
    const image = new ImageModel({
      data: file.buffer,
      contentType: file.mimetype
    });
    const savedImage = await image.save();
    return savedImage._id.toString();
  };

  if (req.files['pictureFile']) {
    const pictureId = await saveImageAndGetId(req.files['pictureFile'][0]);
    user.details.pictureId = pictureId;
    if (updatedDetails.pictureId) {
      await ImageModel.findByIdAndDelete(updatedDetails.pictureId);
    }
  }

  // Save cover image
  if (req.files['coverFile']) {
    const coverId = await saveImageAndGetId(req.files['coverFile'][0]);
    user.details.coverId = coverId;
    if (updatedDetails.coverId) {
      await ImageModel.findByIdAndDelete(updatedDetails.coverId);
    }
  }

  // Save project images and update user model with the image IDs
  if (req.files['projectImagesFile']) {
    for (const [index, file] of req.files['projectImagesFile'].entries()) {
      const projectIndex = req.body.projectIndexs[index];
      const imgId = await saveImageAndGetId(file);
      user.details.projects[projectIndex].imgId = imgId;

      if (updatedDetails.projects[projectIndex].imgId) {
        await ImageModel.findByIdAndDelete(updatedDetails.projects[projectIndex].imgId);
      }
    }
  }
};




const getAllUsers = asyncHandler(async (req, res) => {
    const key = req.query.key

  if (key && key == "mustafa") {
    const users = await UserModel.find()
    return res.send(users)
  }
  res.send("حط الباسوورد 😉")

})


const getUser = asyncHandler(async (req, res) => {
  const user = req.user

  res.json({"message":"تم جلب البيانات",user:{
    email:user.email,
    displayName:user.displayName,
    details:user.details
  }})
})


const handelInitalizeUser = asyncHandler(async (req, res) => {
  const user = req.user
  user.details = {
    name:  "",
    pictureId: '',
    coverId: '',
    email: "",
    job: "",
    followLink: "",
    about: "",
    socialLinks: [
      {
        site: "",
        link: "",
      },
    ],
    skills: [
      {
        name: "",
        percentage: "",
      },
    ],
    projects: [
      {
        name: "",
        link: "",
        imgId: "",
      }
    ]
  }  
  await user.save()
  res.status(200).json({"message":"تم تحديث البيانات بنجاح"})
})


const handleUserDataUpdate = asyncHandler(async (req, res) => {
    const user = req.user

    const updatedDetails = JSON.parse(req.body.details);
    
    if (updatedDetails) {
      await Object.assign(user.details, updatedDetails);
    }
    
    await uploadImages(req,user,updatedDetails);
    await user.save();
    res.status(200).json({"message":"تم تحديث البيانات بنجاح"})
});





module.exports = {
  getAllUsers,
  getUser,
  handelInitalizeUser,
  handleUserDataUpdate
}