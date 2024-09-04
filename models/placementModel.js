const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let PlacementModel = new Schema({
   Title: {
            type: String
          },
   Description: {
            type: String
           },
   Eligible_Department: {
                type: String
               },
   Organizedby: {
                type: String
             },
   CompanyName: {
                type: String
             },
   DatePicker: {
                type: String
             },
   CampusType: {
                type: String
             },
   File:    [{
               type: String
            }],
    CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Placement'
    });
 
    module.exports = mongoose.model('Placement', PlacementModel);