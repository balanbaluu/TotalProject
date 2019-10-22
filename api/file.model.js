const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let File = new Schema({
 
  file:{
    type: String,
    required:true
  }
},{
    collection: 'fileDetail'
});
module.exports = mongoose.model('File', File);
