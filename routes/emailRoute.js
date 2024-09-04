// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const emailRoute = express.Router();
let emailModel = require('../models/emailModel');

// To Get List Of Employees
emailRoute.get('/', async(req, res) => {
  await emailModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
emailRoute.post('/addemail', async(req, res) => {
  const email = await new emailModel(req.body);
  console.log(email);
  email.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
emailRoute.get('/editemail/:id', async(req, res) => {
  const { id } = req.params;
  await emailModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
emailRoute.put('/updateEmail/:id', async(req, res) => {
  const { id } = req.params;
  await emailModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
emailRoute.delete('/deleteEmail/:id', async(req, res) => {
  const { id } = req.params;
  await emailModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = emailRoute;