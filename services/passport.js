'use strict'
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.use( new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleSecret,
  callbackURL: '/auth/google/callback'
},
(accessToken, profile, cb) => {
  console.log(callbackURL)
  console.log('accessToken',accessToken)
  console.log('refreshToken',refreshToken)
  console.log('profile: ',profile)
  new User({ googleID: profile.id}).save()

}

)
);
