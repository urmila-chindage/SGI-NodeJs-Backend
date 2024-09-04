// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const contactRoute = express.Router();
let contactModel = require('../models/contactModel');

// To Get List Of Employees
contactRoute.get('/', async(req, res) => {
  await contactModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
contactRoute.post('/addcontact', async(req, res) => {
  const contact = await new contactModel(req.body);
  console.log(contact);
  contact.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
contactRoute.get('/editcontact/:id', async(req, res) => {
  const { id } = req.params;
  await contactModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
contactRoute.put('/updatecontact/:id', async(req, res) => {
  const { id } = req.params;
  await contactModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
contactRoute.delete('/deletecontact/:id', async(req, res) => {
  const { id } = req.params;
  await contactModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = contactRoute;