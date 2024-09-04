// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const calendarRoute = express.Router();
let calendarModel = require('../models/calendarModel');

// To Get List Of Employees
calendarRoute.get('/', async(req, res) => {
  await calendarModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
calendarRoute.post('/addcalendar', async(req, res) => {
  const calendar = await new calendarModel(req.body);
  console.log(calendar);
  calendar.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
calendarRoute.get('/editcalendar/:id', async(req, res) => {
  const { id } = req.params;
  await calendarModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
calendarRoute.put('/updatecalendar/:id', async(req, res) => {
  const { id } = req.params;
  await calendarModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
calendarRoute.delete('/deletecalendar/:id', async(req, res) => {
  const { id } = req.params;
  await calendarModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = calendarRoute;