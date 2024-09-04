// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const newsRoute = express.Router();
let newsModel = require('../models/newsModel');

// To Get List Of Employees
newsRoute.get('/', async(req, res) => {
  await newsModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
newsRoute.post('/addnews', async(req, res) => {
  const news = await new newsModel(req.body);
  console.log(news);
  news.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
newsRoute.get('/editnews/:id', async(req, res) => {
  const { id } = req.params;
  await newsModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
newsRoute.put('/updatenews/:id', async(req, res) => {
  const { id } = req.params;
  await newsModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
newsRoute.delete('/deletenews/:id', async(req, res) => {
  const { id } = req.params;
  await newsModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = newsRoute;