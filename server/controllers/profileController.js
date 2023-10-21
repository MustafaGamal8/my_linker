const asyncHandler = require("../middlewares/asyncHandler");
const UserModel = require("../models/userModel");


// const ServerUrl = "https://mylinker-server.vercel.app";
const ServerUrl = "http://localhost:3000";



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


module.exports = { getProfile }