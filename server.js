const config = require('./config/config');
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = config.PORT || 3001;
const cors = require("cors");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const app = express();
// const app = expressPassport();



app.use(express.json());




const routes = require("./routes");





// -------------- End Of Imports ------------------- //



// --- Middleware --- //

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// --- Connect to Mongoose --- //
// db options
const options = {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Project-Three", options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000", // <-- location of the react app we're connecting to
  credentials: true
}))


app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnintialized: true
}));

app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);




// Add routes, both API and view
app.use(routes);





// --- End of Middleware --- //


// --- Routes for login --- //   

// !! Can be Moved to routes folder when finished !! //





app.get('/health-check', (req, res) => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  res.send(`status up at ${date} ${time}`)
})









app.post("/api/login", (req, res, next) => {
  // console.log('--- Attempting to log in user...')
  passport.authenticate("local", (err, user, info) => {
    // console.log('user after passport auth is: ', user);
    if (err) throw err;
    if (!user) res.status(404).send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // User is authenticated
        // console.log('req.user: ', req.user);
        res.send(req.user);
      });
    }
  })(req, res, next)
})


app.post("/api/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        title: req.body.title
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  console.log(`${req.method} ${req.url}`);

  console.log('req.user: ', req.user);

  if (req.user) {
    res.send(req.user) // <--- this is where the entire user is stored .. can be used elsewhere in app

  } else {
    console.log('no user found')
    res.status(403).send('no user')
  }
})

app.get("/api/logout", function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Serve up static assets (usually on heroku) -- commented out till we run npm build -- //



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



module.exports = app; // for testing
