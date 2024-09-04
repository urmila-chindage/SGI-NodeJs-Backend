// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const placementRoute = express.Router();
let placementModel = require('../models/placementModel');

// To Get List Of Employees
placementRoute.get('/', async(req, res) => {
  await placementModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
placementRoute.post('/addplacement', async(req, res) => {
  const placement = await new placementModel(req.body);
  console.log(placement);
  placement.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
placementRoute.get('/editplacement/:id', async(req, res) => {
  const { id } = req.params;
  await placementModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
placementRoute.put('/updateplacement/:id', async(req, res) => {
  const { id } = req.params;
  await placementModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
placementRoute.delete('/deleteplacement/:id', async(req, res) => {
  const { id } = req.params;
  await placementModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = placementRoute;