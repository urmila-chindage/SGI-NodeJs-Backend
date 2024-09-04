// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const implinkRoute = express.Router();
let implinkModel = require('../models/implinkModel');

// To Get List Of Employees
implinkRoute.get('/', async(req, res) => {
  await implinkModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
implinkRoute.post('/addimplink', async(req, res) => {
  const implink = await new implinkModel(req.body);
  console.log(implink);
  implink.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
implinkRoute.get('/editimplink/:id', async(req, res) => {
  const { id } = req.params;
  await implinkModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
implinkRoute.put('/updateimplink/:id', async(req, res) => {
  const { id } = req.params;
  await implinkModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
implinkRoute.delete('/deleteimplink/:id', async(req, res) => {
  const { id } = req.params;
  await implinkModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = implinkRoute;