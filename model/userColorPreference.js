const mongoose = require('mongoose');


const preferenceSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    colorTheme: { type: String },
  });
  
  const Preference = mongoose.model('Preference', preferenceSchema);

  module.exports = Preference;