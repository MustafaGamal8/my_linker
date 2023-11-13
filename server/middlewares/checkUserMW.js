const jwt = require("jsonwebtoken")
const asyncHandler = require("./asyncHandler");
const UserModel = require("../models/userModel");

const checkUserMW = asyncHandler(
  async (req, res, next) => {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(400).json({ error: "No user found" });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await UserModel.findById(decodedToken.userId);

    if (!user) {
      return res.status(400).json({ error: "No user found" });
    }

    req.user = user
    next()
  }
)

module.exports = checkUserMW 