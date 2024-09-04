// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const libraryRoute = express.Router();
let libraryModel = require('../models/libraryModel');

// To Get List Of Employees
libraryRoute.get('/', async(req, res) => {
  await libraryModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
libraryRoute.post('/addlibrary', async(req, res) => {
  const library = await new libraryModel(req.body);
  console.log(library);
  library.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
libraryRoute.get('/editlibrary/:id', async(req, res) => {
  const { id } = req.params;
  await libraryModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
libraryRoute.put('/updatelibrary/:id', async(req, res) => {
  const { id } = req.params;
  await libraryModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
libraryRoute.delete('/deletelibrary/:id', async(req, res) => {
  const { id } = req.params;
  await libraryModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = libraryRoute;