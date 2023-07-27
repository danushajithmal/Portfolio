// adminmodel.js

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
      type: String 
    },
    password: {
      type: String
    }
  });
  
  const Admindetails = mongoose.model('Admindetails', adminSchema);

module.exports = Admindetails;