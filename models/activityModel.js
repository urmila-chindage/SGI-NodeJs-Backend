const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ActivityModel = new Schema({
    Title: {
            type: String
          },
    Description: {
            type: String
           },
    Duration: {
                type: Number
               },
    EventFor: {
                type: String
             },
    Department: {
                type: String
             },
    Type: {
                type: String
             },
    DatePickerDialog: {
                type: Date
             },
   File: [{
                type: String
             }],
   File1: {
               type: String
            },
    CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Activity'
    });
 
    module.exports = mongoose.model('Activity', ActivityModel);