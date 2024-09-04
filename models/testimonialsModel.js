const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Contact schema
 let TestimonialsModel = new Schema({
    Name: {
            type: String
          },
    Image: {
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
        collection: 'Testimonials'
    });
 
    module.exports = mongoose.model('Testimonials', TestimonialsModel);