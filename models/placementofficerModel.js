const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let PlacementOfficerModel = new Schema({
    Image: {
            type: String
          },
    Name: {
            type: String
           },
    Description: {
                type: String
               },
   CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'PlacementOfficer'
    });
 
    module.exports = mongoose.model('PlacementOfficer', PlacementOfficerModel);