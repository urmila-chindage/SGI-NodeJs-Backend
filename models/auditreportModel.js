const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let AuditReportModel = new Schema({
    Title: {
            type: String
          },
    File: {
            type: String
          },
    createdAt: {
            type: Date,
            default: Date.now,
         },
    },
    {
        collection: 'AuditReport'
    });
 
    module.exports = mongoose.model('AuditReport', AuditReportModel);