const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//define scheme
var userSchema = mongoose.Schema({
      userid: String,
      sex : String,
      city : String
});
