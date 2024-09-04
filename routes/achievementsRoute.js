// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const achievementsRoute = express.Router();
let achievementsModel = require('../models/achievementsModel');

// To Get List Of Employees
achievementsRoute.get('/', async(req, res) => {
  await achievementsModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
achievementsRoute.post('/addachievement', async(req, res) => {
  const achievements = await new achievementsModel(req.body);
  console.log(achievements);
  achievements.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
achievementsRoute.get('/editachievement/:id', async(req, res) => {
  const { id } = req.params;
  await achievementsModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
achievementsRoute.put('/updateachievement/:id', async(req, res) => {
  const { id } = req.params;
  await achievementsModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
achievementsRoute.delete('/deleteachievement/:id', async(req, res) => {
  const { id } = req.params;
  await achievementsModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = achievementsRoute;