// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const auditreportRoute = express.Router();
let auditreportModel = require('../models/auditreportModel');

// To Get List Of Employees
auditreportRoute.get('/', async(req, res) => {
  await auditreportModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
auditreportRoute.post('/addauditreport', async(req, res) => {
  const auditReport = await new auditreportModel(req.body);
  console.log(auditReport);
  auditReport.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
auditreportRoute.get('/editauditreport/:id', async(req, res) => {
  const { id } = req.params;
  await auditreportModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
auditreportRoute.put('/updateauditreport/:id', async(req, res) => {
  const { id } = req.params;
  await auditreportModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
auditreportRoute.delete('/deleteauditreport/:id', async(req, res) => {
  const { id } = req.params;
  await auditreportModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = auditreportRoute;