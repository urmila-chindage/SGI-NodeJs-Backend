const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let CarouselModel = new Schema({
    Images: {
            type: String
          },
    createdAt: {
            type: Date,
            default: Date.now,
         },
    },
    {
        collection: 'Caursel'
    });
 
    module.exports = mongoose.model('CarouselModel', CarouselModel);