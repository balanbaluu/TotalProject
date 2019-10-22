const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
 student_name: {
    type: String
  },
 school_name: {
    type: String
  },
 reg_number: {
    type: Number
  },
  
},{
    collection: 'schoolDetail'
});
module.exports = mongoose.model('Business', Business);
