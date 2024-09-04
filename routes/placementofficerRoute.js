// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const placementofficerRoute = express.Router();
let placementofficerModel = require('../models/placementofficerModel');

// To Get List Of Employees
placementofficerRoute.get('/', async(req, res) => {
  await placementofficerModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
placementofficerRoute.post('/addplacementOfficer', async(req, res) => {
  const placementofficer = await new placementofficerModel(req.body);
  console.log(placementofficer);
  placementofficer.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
placementofficerRoute.get('/editplacementOfficer/:id', async(req, res) => {
  const { id } = req.params;
  await placementofficerModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
placementofficerRoute.put('/updateplacementOfficer/:id', async(req, res) => {
  const { id } = req.params;
  await placementofficerModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
placementofficerRoute.delete('/deleteplacementOfficer/:id', async(req, res) => {
  const { id } = req.params;
  await placementofficerModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = placementofficerRoute;