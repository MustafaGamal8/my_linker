const asyncHandler = require("../middlewares/asyncHandler");
const UserModel = require("../models/userModel");

const jwt = require("jsonwebtoken")




const getProfile = asyncHandler(async (req, res) => {
  const { email, _id } = req.query;

  let user = null;

  if (email) {
    user = await UserModel.findOne({ email });
  }
  if (_id) {
    user = await UserModel.findById(_id);
  }

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  if (user.details) {
    return res.status(200).json(user.details);
  }else{
    return res.status(400).json({ error: "User details not found"})
  }

});




const editProfile = asyncHandler(async (req, res) => {
  const token = req.headers["x-auth-token"];
  const decodedToken = jwt.verify(token, process.env.SECRET);

  const user = await UserModel.findById(decodedToken.userId);

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const { details } = req.body;

  for (const key in details) {
    if (details[key] == null || details[key] === "" || details[key].length < 1) {
      delete details[key];
    }
  }

  // Update the user's details
  user.details = details;


  // Save the updated user details
  await user.save();

  res.json({"msg":"User details updated successfully"});
});


module.exports = { getProfile, editProfile }