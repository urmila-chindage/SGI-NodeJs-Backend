const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let EmailUploadModel = new Schema({
    FileName: {
            type: String
          },
    FileUpload: {
            type: String
           },
   CreatedDate: {
                type: Date,
                default: Date.now,
             },
    },
    {
        collection: 'EmailUpload'
    });
 
    module.exports = mongoose.model('EmailUpload', EmailUploadModel);