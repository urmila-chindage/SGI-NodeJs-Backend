// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const counterRoute = express.Router();
let counterModel = require('../models/counterModel');

// To Get List Of Employees
counterRoute.get('/', async(req, res) => {
  await counterModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
counterRoute.post('/addcountervalue', async(req, res) => {
  const counter = await new counterModel(req.body);
  console.log(counter);
  counter.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
counterRoute.get('/editcountervalue/:id', async(req, res) => {
  const { id } = req.params;
  await counterModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
counterRoute.put('/updatecountervalue/:id', async(req, res) => {
  const { id } = req.params;
  await counterModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
counterRoute.delete('/deletecountervalue/:id', async(req, res) => {
  const { id } = req.params;
  await counterModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = counterRoute;