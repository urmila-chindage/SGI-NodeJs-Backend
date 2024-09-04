const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let ClientSubscriberModel = new Schema({
    Email: {
            type: String
          },
    Desc: {
            type: String
          },
    createdAt: {
            type: Date,
            default: Date.now,
         },
    },
    {
        collection: 'ClientSubscriber'
    });
 
    module.exports = mongoose.model('ClientSubscriber', ClientSubscriberModel);