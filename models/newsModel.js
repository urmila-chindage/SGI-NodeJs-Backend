const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let NewsModel = new Schema({
    Title: {
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
        collection: 'News'
    });
 
    module.exports = mongoose.model('News', NewsModel);