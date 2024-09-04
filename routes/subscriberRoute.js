// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const subscriberRoute = express.Router();
let subscriberModel = require('../models/subscriberModel');

// To Get List Of Employees
subscriberRoute.get('/', async(req, res) => {
  await subscriberModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
subscriberRoute.post('/subscribercount', async(req, res) => {
  const subscriber = await new subscriberModel(req.body);
  console.log(subscriber);
  subscriber.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
subscriberRoute.get('/editsubscribercount/:id', async(req, res) => {
  const { id } = req.params;
  await subscriberModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
subscriberRoute.put('/updatesubscribercount/:id', async(req, res) => {
  const { id } = req.params;
  await subscriberModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
subscriberRoute.delete('/deletesubscribercount/:id', async(req, res) => {
  const { id } = req.params;
  await subscriberModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = subscriberRoute;