import express from 'express';

const passport = require('passport');
require('./passportConfig')(passport);
const router = express.Router();

router.route("/google").get(passport.authenticate("google", { scope: ["email", "profile"] }));

router.route("/google/callback").get(passport.authenticate("google", { session: false }), (req, res) => {
    res.redirect("/");
});

router.route("/").get((req, res) => {
    res.send("this is a test route");
});

export default router;