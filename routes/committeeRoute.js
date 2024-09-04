// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const committeeRoute = express.Router();
let committeeModel = require('../models/committeeModel');

// To Get List Of Employees
committeeRoute.get('/', async(req, res) => {
  await committeeModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
committeeRoute.post('/addcommittee', async(req, res) => {
  const committee = await new committeeModel(req.body);
  console.log(committee);
  committee.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
committeeRoute.get('/editcommittee/:id', async(req, res) => {
  const { id } = req.params;
  await committeeModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
committeeRoute.put('/updatecommittee/:id', async(req, res) => {
  const { id } = req.params;
  await committeeModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
committeeRoute.delete('/deletecommittee/:id', async(req, res) => {
  const { id } = req.params;
  await committeeModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = committeeRoute;