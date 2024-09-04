// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const modalwindoRoute = express.Router();
let modalwindowModel = require('../models/modalWindowModel');

// To Get List Of Employees
modalwindoRoute.get('/', async(req, res) => {
  await modalwindowModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
modalwindoRoute.post('/addmodalimage', async(req, res) => {
  const modalwindow = await new modalwindowModel(req.body);
  console.log(modalwindow);
  modalwindow.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
modalwindoRoute.get('/editmodalimage/:id', async(req, res) => {
  const { id } = req.params;
  await modalwindowModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
modalwindoRoute.put('/updatemodalimage/:id', async(req, res) => {
  const { id } = req.params;
  await modalwindowModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
modalwindoRoute.delete('/deletemodalimage/:id', async(req, res) => {
  const { id } = req.params;
  await modalwindowModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = modalwindoRoute;