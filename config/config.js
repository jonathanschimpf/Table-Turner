require('dotenv').config();

const config = {
    USER_NAME: process.env.USER_NAME || "",
    PASSWORD: process.env.PASSWORD || ""
}

module.exports = config;