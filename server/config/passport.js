
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const FacebookStrategy = require('passport-facebook').Strategy;



passport.use(
  new GoogleStrategy(
    {
      clientID: '189951846692-9c9a1jroi5q8n669p0nemn8n1mfhs7fm.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/callback', 
      passReqToCallback: true
    },(req, accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: '6826290637421123',
      clientSecret: '319e204ca9cb6ec8339f8f1de5288abe',
      callbackURL: '/auth/facebook/callback',
    },(req, accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);



passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

