const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require ("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3000 ", // <-- location of the react app we're connecting to
  credentials: true
}))


app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnintialized: true
}));

app.use(cookieParser("secretcode"))
// Routes for login // Can be Moved to routes foldder when finished //
app.post ("/login", (req, res) => {
  console.log(req.body)
})

app.post ("/register", (req, res) => {
  console.log(req.body)
})

app.get ("/user", (req, res) => {})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
