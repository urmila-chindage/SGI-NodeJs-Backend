const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let LatestUpdate = new Schema({
    Title: {
            type: String
          },
    Description: {
            type: String
            
          },
    Image: {
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
        collection: 'LatestUpdate'
    });
 
    module.exports = mongoose.model('LatestUpdate', LatestUpdate);