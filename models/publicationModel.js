const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let PublicationModel = new Schema({
    PName: {
            type: String
          },
    PYear: {
            type: Number
           },
    PTitle: {
                type: String
               },
    PPlatformName: {
                type: String
             },
    PCategory: {
                type: String
             },
    Department: {
                type: String
             },
    Publishedby: {
                type: String
             },
    
    CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Publication'
    });
 
    module.exports = mongoose.model('Publication', PublicationModel);