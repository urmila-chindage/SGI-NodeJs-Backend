// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const carouselRoute = express.Router();
let carouselModel = require('../models/carouselModal');

// To Get List Of Employees
carouselRoute.get('/', async(req, res) => {
  await carouselModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
carouselRoute.post('/addimages', async(req, res) => {
  const caroselImage = await new carouselModel(req.body);
  console.log(caroselImage);
  caroselImage.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
carouselRoute.get('/editimages/:id', async(req, res) => {
  const { id } = req.params;
  await carouselModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
carouselRoute.put('/updatecarouselimage/:id', async(req, res) => {
  const { id } = req.params;
  await carouselModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
carouselRoute.delete('/deletecarouselimage/:id', async(req, res) => {
  const { id } = req.params;
  await carouselModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = carouselRoute;