// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const resultnletterRoute = express.Router();
let resultnletterModel = require('../models/resultnletterModel');

// To Get List Of Employees
resultnletterRoute.get('/', async(req, res) => {
  await resultnletterModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
resultnletterRoute.post('/addresultnletter', async(req, res) => {
  const resultnletter = await new resultnletterModel(req.body);
  console.log(resultnletter);
  resultnletter.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
resultnletterRoute.get('/editresultnletter/:id', async(req, res) => {
  const { id } = req.params;
  await resultnletterModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
resultnletterRoute.put('/updateresultnletter/:id', async(req, res) => {
  const { id } = req.params;
  await resultnletterModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
resultnletterRoute.delete('/deleteresultnletter/:id', async(req, res) => {
  const { id } = req.params;
  await resultnletterModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = resultnletterRoute;