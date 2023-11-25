// const asyncHandler = require('express-async-handler');
const asyncHandler = require('../middlewares/asyncHandler');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")



const signUp = asyncHandler(async (req, res) => {
  const form = req.body

  if (!form.email || !form.password) {
    return res.status(400).json({ message: "all fields are required !! " })
  }


  const user = await UserModel.findOne({ email: form.email })

  if (user && user.authProvider.provider == "google") {
    return res.status(400).json({ error: "البريد الالكتروني مستخدم بالفعل عن طريق جوجل " })
  }

  if (user) {
    return res.status(400).json({ error: "البريد الالكتروني مستخدم بالفعل" })
  }

  const hashedPwd = await bcrypt.hash(form.password, 10)

  const userObj = new UserModel({
    email: form.email,
    displayName: form.displayName,
    password: hashedPwd,
    authProvider: {
      provider: "local",
      providerUserId: form.email
    }
  })

  await userObj.save()
  res.send({ message: "تم تسجيلك بنجاح" })

}
)


const login = asyncHandler(async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
    'authProvider.provider': 'local' 
  });


  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(403).json({ error: "البريد الالكتروني أو كلمة المرور غير صحيح" });
  }

  const token = await jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1d' })

  res.json({
    token, message: "تم تسجيل الدخول بنجاح", user: {
      email: user.email,
      displayName: user.displayName,
      details: user.details,
    }
  })

})








const signUpOrLoginWithGoogle = asyncHandler(async (req, res) => {
  if (!req.user) {
    // Google authentication failed
    return res.status(401).json({ message: 'Google authentication failed.' });
  }

  // Check if the user already exists in your database
  const googleUser = req.user;
  const user = await UserModel.findOne({ email: googleUser._json.email });  
  
  if (!user) {
    const userObj = new UserModel({
      displayName: googleUser.displayName,
      email: googleUser._json.email,
      details: {
        picture: googleUser._json.picture        
      },
      authProvider: {
        provider: "google",
        providerUserId: googleUser.id
      }
    });
    await userObj.save();
  }
  
  const newUser = await UserModel.findOne({ email: googleUser._json.email });
  const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, { expiresIn: '1d' });
  const redirectUrl = `https://mylinker.vercel.app/auth/provider?token=${token}`;
  return res.redirect(redirectUrl)
});


const signUpOrLoginWithFacebook = asyncHandler(async (req, res) => {

  if (!req.user) {
    // Facebook authentication failed
    return res.status(401).json({ message: 'Facebook authentication failed' });
  }

  // Check if the user already exists in your database
  const facebookUser = req.user;
  const user = await UserModel.findOne({ "authProvider.providerUserId": facebookUser.id });

  if (!user) {
    const userObj = new UserModel({
      displayName: facebookUser.displayName,
      authProvider: {
        provider: "facebook",
        providerUserId: facebookUser.id
      }
    });
    await userObj.save();
  }

  
  const newUser = await UserModel.findOne({ "authProvider.providerUserId": facebookUser.id });

  const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, { expiresIn: '1d' });
  const redirectUrl = `https://mylinker.vercel.app/auth/provider?token=${token}`;
  return res.redirect(redirectUrl)


})







module.exports = { signUp, login, signUpOrLoginWithGoogle, signUpOrLoginWithFacebook }