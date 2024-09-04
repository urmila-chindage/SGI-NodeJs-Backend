// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const staffRoute = express.Router();
let staffModel = require('../models/staffModel');

// To Get List Of Employees
staffRoute.get('/', async(req, res) => {
  await staffModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
staffRoute.post('/addstaff', async(req, res) => {
  const staff = await new staffModel(req.body);
  console.log(staff);
  staff.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
staffRoute.get('/editstaff/:id', async(req, res) => {
  const { id } = req.params;
  await staffModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
staffRoute.put('/updatestaff/:id', async(req, res) => {
  const { id } = req.params;
  await staffModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
staffRoute.delete('/deletestaff/:id', async(req, res) => {
  const { id } = req.params;
  await staffModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = staffRoute;