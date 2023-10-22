const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  picture : Buffer,
  cover:Buffer,
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
  skills: [String],
  projects: [
    {
      title: String,
      link: String,
      img: String,
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
