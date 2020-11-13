const mongoose = require('mongoose');


const user = new mongoose.Schema({
    username: String,
    password: String, 
    title: String,
    
});

module.exports = mongoose.model("User", user);