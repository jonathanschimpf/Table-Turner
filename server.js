const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require ("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt.js");
const expressSession = require("express-session");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



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
