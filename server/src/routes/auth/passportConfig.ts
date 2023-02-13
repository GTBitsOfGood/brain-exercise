const GoogleStrategy = require("passport-google-oauth2").Strategy;
import { User, UserDocument } from '../../models/User';
import { CLIENT_ID, CLIENT_SECRET } from '../../util/secrets';

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback : true
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            let existingUser = await User.findOne({ 'googleId': profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
            console.log('Creating new user...');
            const newUser = new User({
                name: profile.displayName,
                googleId: profile.id,
                accessToken: accessToken
            });
            await newUser.save();
            return done(null, newUser);
            } catch (error) {
                return done(error, false)
            }
        }
    ));
}