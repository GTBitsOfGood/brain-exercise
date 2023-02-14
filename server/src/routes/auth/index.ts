import express from "express";
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("./passportConfig")(passport);
const router = express.Router();

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["email", "profile"] }));

router
  .route("/google/callback")
  .get(passport.authenticate("google", { session: false }), (req, res) => {
    jwt.sign(
      // @ts-ignore
      { user: req.user },
      "secretKey",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return res.json({
            token: null,
          });
        }
        res.json({
          token,
        });
      }
    );
  });

router.route("/").get((req, res) => {
  res.send("this is a test route");
});

export default router;
