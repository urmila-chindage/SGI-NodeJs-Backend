const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let MarqueeModel = new Schema({
     Data: {
            type: String
          },
    createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        collection: 'Marquee'
    });
 
    module.exports = mongoose.model('Marquee', MarqueeModel);