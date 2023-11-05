const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  name: String,
  pictureUrl :String ,
  coverUrl:String,
  email: String,
  job: String,
  followLink: String,
  about: String,
  socialLinks: [
    {
      site: String,
      link: String,
    },
  ],
  skills: [
    {
      name: String,
      percentage: String,
    },
  ],
  projects: [
    {
      name: String,
      link: String,
      imgUrl: String,
    },
  ],
}, { _id: false });

const UserSchema = new mongoose.Schema({
  displayName:{
    type: String
  },
  email: {
    type: String,
    required: () => {
      return this.authProvider === 'local';
    },
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  password: {
    type: String,
    required: () => {
      return this.authProvider === 'local';
    },
  },
  authProvider: {
  providerUserId: {
    type: String,
    unique: true,
  },  
  provider: {
    type: String,
     enum: ["local", "facebook", "google"],
     required: true,
    }   
  },
     
  details: DetailsSchema,
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
