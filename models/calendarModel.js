const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let CalendarModel = new Schema({
    Year: {
            type: Number
          },
    Level: {
            type: String
           },
    Department: {
                type: String
               },
    Semister: {
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
        collection: 'Calendar'
    });
 
    module.exports = mongoose.model('Calendar', CalendarModel);