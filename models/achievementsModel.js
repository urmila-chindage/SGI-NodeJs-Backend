const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let AchievementsModel = new Schema({
    Title: {
            type: String
          },
    Description: {
            type: String
           },
    Category: {
                type: String
               },
    Department: {
                type: String
             },
    Image: {
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
        collection: 'Achivement'
    });
 
    module.exports = mongoose.model('Achivement', AchievementsModel);