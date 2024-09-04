const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let CommmitteeModel = new Schema({
    CName: {
            type: String
          },
    CYear: {
            type: Number
           },
    addCommitteeData: [{
            MemberName:{
                type: String
            },
            Designation:{
                type: String
            }
        }],
  CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'Committee'
    });
 
    module.exports = mongoose.model('Committee', CommmitteeModel);