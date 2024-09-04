const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ModalWindowModel = new Schema({
    MWImage: {
            type: String
          },
    MWLink: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
         },
    },
    {
        collection: 'ModalWindow'
    });
 
    module.exports = mongoose.model('ModalWindow', ModalWindowModel);