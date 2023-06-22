
const express = require('express')
const { loginController, registerController } = require( "../controller/authController");
const {updatePreference,getPreference} = require("../controller/preferenceController")
const route  = express.Router()

// API endpoint to save user preferences
route.post('/preferences',updatePreference );


  // API endpoint to retrieve user preferences
route.get('/preferences/:userId', getPreference);

//new register
route.post('/register',registerController)

//login check

route.post('/login',loginController)

module.exports= route