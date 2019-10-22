const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Auth = new Schema({
  email:{
    type:String
  },
  password:{
    type: Number
  }
},{
    collection: 'authDetail'
});
module.exports = mongoose.model('Auth', Auth);
