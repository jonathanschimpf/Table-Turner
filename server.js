const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const app = express();
const passportApp = express();
const routes = require("./routes");

// -------------- End Of Imports ------------------- //



// --- Middleware --- //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// --- Connect to Mongoose --- //
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Project-Three", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

passportApp.use(bodyParser.json());
passportApp.use(bodyParser.urlencoded({extended: true}));
passportApp.use(cors({
  origin: "http://localhost:3000", // <-- location of the react passportApp we're connecting to
  credentials: true
}))


passportApp.use(session({
  secret: "secretcode",
  resave: true,
  saveUnintialized: true
}));

passportApp.use(cookieParser("secretcode"))
passportApp.use(passport.initialize());
passportApp.use(passport.session());
require('./passportConfig')(passport);




// ------------- End of Middleware ------------- //


// -------------- Routes for login ------------ //   

// !! Can be Moved to routes folder when finished !! //



passportApp.post ("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Successfully Authenticated User');
        console.log(req.user);
      });
    }
  })(req, res, next) 
})


passportApp.post ("/register", (req, res) => {
  User.findOne({username: req.body.username}, async (err, doc) => {
   if (err) throw err;
   if (doc) res.send("User Already Exists");
   if(!doc){
     const hashedPassword = await  bcrypt.hash(req.body.password, 10)
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

passportApp.get ("/user", (req, res) => {
  res.send(req.user) // <--- this is where the entire user is stored .. can be used elsewhere in app
})

// Serve up static assets (usually on heroku) -- commented out till we run npm build -- //



// Send every request to the React app
// Define any API routes before this runs


// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
