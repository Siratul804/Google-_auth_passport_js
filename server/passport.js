const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "66620736422-efgih70u78vv9lbr10hbvmn8uget18c3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
