// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const testimonialsRoute = express.Router();
let testimonialsModel = require('../models/testimonialsModel');

// To Get List Of Employees
testimonialsRoute.get('/', async(req, res) => {
  await testimonialsModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
testimonialsRoute.post('/addtestimonials', async(req, res) => {
  const testimonials = await new testimonialsModel(req.body);
  console.log(testimonials);
  testimonials.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
testimonialsRoute.get('/edittestimonials/:id', async(req, res) => {
  const { id } = req.params;
  await testimonialsModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
testimonialsRoute.put('/updatetestimonials/:id', async(req, res) => {
  const { id } = req.params;
  await testimonialsModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
testimonialsRoute.delete('/deletetestimonials/:id', async(req, res) => {
  const { id } = req.params;
  await testimonialsModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = testimonialsRoute;