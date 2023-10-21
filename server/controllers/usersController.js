const asyncHandler = require("../middlewares/asyncHandler");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken")





const getAllUser = asyncHandler(async (req, res) => {
    const key = req.query.key

  if (key && key == "mustafa") {
    const users = await UserModel.find()
    return res.send(users)
  }
  res.send("Please Enter the Secret Key")

})





const editUser = asyncHandler(async (req, res) => {
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

  res.json({"message":"User details updated successfully"});

})






module.exports = {
  getAllUser,
  editUser
}