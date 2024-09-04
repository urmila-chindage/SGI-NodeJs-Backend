const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let CounterModel = new Schema({
    TotalStudent: {
            type: Number
          },
    Course: {
            type: Number
           },
    Teacher: {
                type: Number
             },
    createdAt: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Counter'
    });
 
    module.exports = mongoose.model('Counter', CounterModel);