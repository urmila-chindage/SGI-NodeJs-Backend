// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const activityRoute = express.Router();
let activityModel = require('../models/activityModel');

// To Get List Of Employees
activityRoute.get('/', async(req, res) => {
  await activityModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
activityRoute.post('/addactivity', async(req, res) => {
  const activity = await new activityModel(req.body);
  console.log(activity);
  activity.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
activityRoute.get('/editactivity/:id', async(req, res) => {
  const { id } = req.params;
  await activityModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
activityRoute.put('/updateactivity/:id', async(req, res) => {
  const { id } = req.params;
  await activityModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
activityRoute.delete('/deleteactivity/:id', async(req, res) => {
  const { id } = req.params;
  await activityModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = activityRoute;