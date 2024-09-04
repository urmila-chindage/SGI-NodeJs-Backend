const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ContactUSModel = new Schema({
    Name: {
            type: String
          },
    Email: {
            type: String
           },
    ContactNo: {
                type: Number
               },
    Message: {
                type: String
             },
   createdAt: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'ContactUS'
    });
 
    module.exports = mongoose.model('ContactUS', ContactUSModel);