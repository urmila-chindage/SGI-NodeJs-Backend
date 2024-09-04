const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let LibraryModel = new Schema({
    Title: {
            type: String
          },
    Category: {
            type: String
           },
   
    File: {
                type: String
             },
   
    CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Library'
    });
 
    module.exports = mongoose.model('Library', LibraryModel);