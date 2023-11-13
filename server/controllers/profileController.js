const { default: mongoose } = require("mongoose");
const asyncHandler = require("../middlewares/asyncHandler");
const UserModel = require("../models/userModel");




const getProfile = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  

  let user = null;

  if (!userId) {
    return res.status(400).json({ error: "المستخدم غير موجود" });
  }

  // Check if userId is a valid MongoDB ObjectId
  if (mongoose.Types.ObjectId.isValid(userId)) {
    user = await UserModel.findById(userId);
  } else {
    const email = `${userId}@gmail.com`;
    user = await UserModel.findOne({ email });
  }


  if (user) {
    return res.status(200).json(user.details);
  } else {
    return res.status(400).json({ error: "المستخدم غير موجود" });
  }
});



module.exports = { getProfile }