// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const clientsubscriberRoute = express.Router();
let clientsubscriberModel = require('../models/clientsubscriberModel');

// To Get List Of Employees
clientsubscriberRoute.get('/', async(req, res) => {
  await clientsubscriberModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
clientsubscriberRoute.post('/addclientsubsriber', async(req, res) => {
  const clientsubscriber = await new clientsubscriberModel(req.body);
  console.log(clientsubscriber);
  clientsubscriber.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
clientsubscriberRoute.get('/editclientsubsriber/:id', async(req, res) => {
  const { id } = req.params;
  await clientsubscriberModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
clientsubscriberRoute.put('/updateclientsubsriber/:id', async(req, res) => {
  const { id } = req.params;
  await clientsubscriberModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
clientsubscriberRoute.delete('/deleteclientsubsriber/:id', async(req, res) => {
  const { id } = req.params;
  await clientsubscriberModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = clientsubscriberRoute;