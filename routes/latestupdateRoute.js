// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const latestupdateRoute = express.Router();
let latestupdateModel = require('../models/latestupdateModel');

// To Get List Of Employees
latestupdateRoute.get('/', async(req, res) => {
  await latestupdateModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
latestupdateRoute.post('/addupdate', async(req, res) => {
  const latestUpdate = await new latestupdateModel(req.body);
  console.log(latestUpdate);
  latestUpdate.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
latestupdateRoute.get('/editupdate/:id', async(req, res) => {
  const { id } = req.params;
  await latestupdateModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
latestupdateRoute.put('/latestupdate/:id', async(req, res) => {
  const { id } = req.params;
  await latestupdateModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
latestupdateRoute.delete('/deleteupdate/:id', async(req, res) => {
  const { id } = req.params;
  await latestupdateModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = latestupdateRoute;