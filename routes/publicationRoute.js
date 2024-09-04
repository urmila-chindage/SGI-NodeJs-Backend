// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const publicationRoute = express.Router();
let publicationModel = require('../models/publicationModel');

// To Get List Of Employees
publicationRoute.get('/', async(req, res) => {
  await publicationModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
publicationRoute.post('/addpublication', async(req, res) => {
  const publication = await new publicationModel(req.body);
  console.log(publication);
  publication.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
publicationRoute.get('/editpublication/:id', async(req, res) => {
  const { id } = req.params;
  await publicationModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
publicationRoute.put('/updatepublication/:id', async(req, res) => {
  const { id } = req.params;
  await publicationModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
publicationRoute.delete('/deletepublication/:id', async(req, res) => {
  const { id } = req.params;
  await publicationModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = publicationRoute;