const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ImpLinkModel = new Schema({
    HtmlContent: {
            type: String
          },
    FileButton: {
            type: Boolean
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
        collection: 'ImpLink'
    });
 
    module.exports = mongoose.model('ImpLink', ImpLinkModel);