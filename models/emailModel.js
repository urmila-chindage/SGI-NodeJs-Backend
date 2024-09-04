const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let EmailModel = new Schema({
    SendTo: {
            type: String
          },
    Subject: {
            type: String
           },
    HtmlCode: {
                type: String
               },
    FileName: {
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
        collection: 'Email'
    });
 
    module.exports = mongoose.model('Email', EmailModel);