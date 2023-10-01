const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {  userValidator } = require('../middlewares/userValidator');
const passport = require('passport');



router.post('/signup', userValidator, authController.signUp);
router.post('/login',  userValidator, authController.login);



router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Route for handling Google Sign-In callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/error' }),
  authController.signUpOrLoginWithGoogle
);

router.get('/facebook', passport.authenticate('facebook'));

// Route for handling Facebook callback
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/error' }),
  authController.signUpOrLoginWithFacebook
);




module.exports = router;
