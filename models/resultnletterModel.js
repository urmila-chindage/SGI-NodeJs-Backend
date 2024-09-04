const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ResultnLetterModel = new Schema({
    Title: {
            type: String
          },
    Description: {
            type: String
           },
    Level: {
                type: String
               },
    Semester: {
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
        collection: 'ResultnLetter'
    });
 
    module.exports = mongoose.model('ResultnLetter', ResultnLetterModel);