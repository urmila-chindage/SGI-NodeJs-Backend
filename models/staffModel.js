const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let StaffModel = new Schema({
    FullName: {
            type: String
          },
    Department: {
            type: String
           },
    Designation: {
                type: String
               },
    Email: {
                type: String
             },
    Qualification: {
                type: String
             },
    Expertise: {
                type: String
             },
    Experience: {
                type: String
             },
    Image: {
                type: String
             },
    Doc:    {
            type: String
             },
    CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'StaffData'
    });
 
    module.exports = mongoose.model('StaffData', StaffModel);