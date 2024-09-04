// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const emailuploadRoute = express.Router();
let emailuploadModel = require('../models/emailuploadModel');

// To Get List Of Employees
emailuploadRoute.get('/', async(req, res) => {
  await emailuploadModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
emailuploadRoute.post('/addemailupload', async(req, res) => {
  const emailUpload = await new emailuploadModel(req.body);
  console.log(emailUpload);
  emailUpload.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
emailuploadRoute.get('/editemailupload/:id', async(req, res) => {
  const { id } = req.params;
  await emailuploadModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
emailuploadRoute.put('/updateEmailUpload/:id', async(req, res) => {
  const { id } = req.params;
  await emailuploadModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
emailuploadRoute.delete('/deleteEmailUpload/:id', async(req, res) => {
  const { id } = req.params;
  await emailuploadModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = emailuploadRoute;