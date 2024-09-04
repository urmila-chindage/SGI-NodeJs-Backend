// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const imagegalleryRoute = express.Router();
let imagegalleryModel = require('../models/imagegalleryModel');

// To Get List Of Employees
imagegalleryRoute.get('/', async(req, res) => {
  await imagegalleryModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
imagegalleryRoute.post('/addgalleryimages', async(req, res) => {
  const imageGallery = await new imagegalleryModel(req.body);
  console.log(imageGallery);
  imageGallery.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
imagegalleryRoute.get('/editgalleryimages/:id', async(req, res) => {
  const { id } = req.params;
  await imagegalleryModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
imagegalleryRoute.put('/updategalleryimages/:id', async(req, res) => {
  const { id } = req.params;
  await imagegalleryModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
imagegalleryRoute.delete('/deletegalleryimage/:id', async(req, res) => {
  const { id } = req.params;
  await imagegalleryModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = imagegalleryRoute;