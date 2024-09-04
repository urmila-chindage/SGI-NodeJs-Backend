// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const marqueeRoute = express.Router();
let marqueeModel = require('../models/marqueeModel');

// To Get List Of Employees
marqueeRoute.get('/', async(req, res) => {
  await marqueeModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
marqueeRoute.post('/addmarqueedata', async(req, res) => {
  const marquee = await new marqueeModel(req.body);
  console.log(marquee);
  marquee.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
marqueeRoute.get('/editmarqueedata/:id', async(req, res) => {
  const { id } = req.params;
  await marqueeModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
marqueeRoute.put('/updatemarqueedata/:id', async(req, res) => {
  const { id } = req.params;
  await marqueeModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
marqueeRoute.delete('/deletemarqueedata/:id', async(req, res) => {
  const { id } = req.params;
  await marqueeModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = marqueeRoute;