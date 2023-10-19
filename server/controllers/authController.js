// const asyncHandler = require('express-async-handler');
const asyncHandler = require('../middlewares/asyncHandler');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt  = require("jsonwebtoken")



const signUp = asyncHandler(  async (req, res) => {
    const form = req.body

    if (!form.email || !form.password) {
      return res.status(400).json({msg:"all fields are required !! "})
    }
    
    
    const isEmailExist  = await UserModel.findOne({email:form.email})
    
    if (isEmailExist) {
      return res.status(400).json({error:"email already exists"})
    }

    const hashedPwd = await bcrypt.hash(form.password,10) 

    const userObj = new UserModel({
      email:form.email,
      password:hashedPwd
    }) 


    userObj.authProvider.provider = "local"    
    await userObj.save()
    res.send({msg: "account created successfully" })
    
  }
)


const login = asyncHandler(async (req, res) => {
  const user = await UserModel.findOne({email:req.body.email})
  

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(403).json({ error: "Email or Password are Wrong" });
  }

  const token = await jwt.sign({userId:user._id},process.env.SECRET , { expiresIn: '1d' })

  res.setHeader("X-Auth-Token",token);
  res.json({msg:"login successfully"})

})








const signUpOrLoginWithGoogle = asyncHandler(async (req, res) => {
  if (!req.user) {
  // Google authentication failed
  return res.status(401).json({ message: 'Google authentication failed.' });
}

// Check if the user already exists in your database
const googleUser = req.user;
const user = await UserModel.findOne({ email: googleUser._json.email });


if (user) {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1d' });
  const redirectUrl = `https://mylinker.vercel.app/auth/provider?token=${token}`;
  return res.redirect(redirectUrl)
} else {  
  const userObj = new UserModel({
    displayName:googleUser.displayName,
    email: googleUser._json.email,
    "authProvider.providerUserId":googleUser.id
  });

  userObj.authProvider.provider = "google"   
  await userObj.save();  
  return res.json({ message: 'Account created successfully' });
}


});


const signUpOrLoginWithFacebook = asyncHandler(async (req, res) => {
  
  if (!req.user) {
    // Facebook authentication failed
    return res.status(401).json({ message: 'Facebook authentication failed.' });
  }
  
  // Check if the user already exists in your database
  const facebookUser = req.user;
  const user = await UserModel.findOne({ "authProvider.providerUserId": facebookUser.id });

  if (user) {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1d' });
    const redirectUrl = `https://mylinker.vercel.app/auth/provider?token=${token}`;
    return res.redirect(redirectUrl)
    
  }else{
    const userObj = new UserModel({
      displayName:facebookUser.displayName,
      "authProvider.providerUserId":facebookUser.id
    });

    userObj.authProvider.provider = "facebook"
    await userObj.save();
    return res.json({ message: 'Account created successfully' });
  }

    
  
} )







module.exports = { signUp ,login, signUpOrLoginWithGoogle,signUpOrLoginWithFacebook}