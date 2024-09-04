const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ImageGalleryModel = new Schema({
    Images: {
            type: String
          },
    createdAt: {
            type: Date,
            default: Date.now,
         },
    },
    {
        collection: 'ImageGallery'
    });
 
    module.exports = mongoose.model('ImageGallery', ImageGalleryModel);