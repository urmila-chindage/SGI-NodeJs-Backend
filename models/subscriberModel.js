const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let SubscriberModel = new Schema({
     Counts: {
                type: Number
            },
    createdAt: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Subscriber'
    });
 
    module.exports = mongoose.model('Subscriber', SubscriberModel);