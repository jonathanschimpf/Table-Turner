const dotenv = require("dotenv");
const joi = require("joi");
const path = require("path");


// Set up path to env file
dotenv.config({ path: path.join(__dirname, "../.env") });


const envVarsSchema = joi
    .object()
    .keys({
        PORT: joi.number().positive().required(),
        USER_NAME: joi.string().required(),
        PASSWORD: joi.string().required(),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    PORT: envVars.PORT,
    USER_NAME: envVars.USER_NAME,
    PASSWORD: envVars.PASSWORD,
};