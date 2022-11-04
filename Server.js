const express = require("express");
const app = express();
// const authRotues = require("./routes/auth-routes");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
// require("./auth");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/TigerNote.html");
});

app.get("/auth/google", (req, res) => {
  passport.authenticate("google", { scope: ["profile"] });
});

app.get("/Textbooks.html", (req, res) => {
  res.sendFile(__dirname + "/Textbooks.html");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/calendar.html", (req, res) => {
  res.sendFile(__dirname + "/Calendar/calendar.html");
});

app.get("/Textbooks.html/upload.html", (req, res) => {
  res.sendFile(__dirname + "/upload.html");
});
// app.use(express.static(__dirname + "Documents"));

app.get("/doc.html/", (req, res) => {
  res.sendFile(__dirname + "/doc.html");
});

app.get("/TigerNote.html", (req, res) => {
  res.sendFile(__dirname + "/TigerNote.html");
});

app.get("/index.", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/auth/google/success",
//     failureRedirect: "/auth/google/failure",
//   })
// );

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         "258880142526-ief6o2t5rp63sqb6a2bgpqrgkbnij8j8.apps.googleusercontent.com",
//       clientSecret: "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",
//       callbackURL: "http://localhost:3001/auth/google/callback",
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       //   console.log(profile);
//       cb(null, profile);
//     }
//   )
// );

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/auth/google/success",
//     failureRedirect: "/auth/google/failure",
//   })
// );

const port = 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
