// Importing important packages
const express = require('express');
 // Using express and routes
const app = express();
const employeeRoute = express.Router();
let employeeModel = require('../models/employeeModel');

// To Get List Of Employees
employeeRoute.get('/', async(req, res) => {
  await employeeModel.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Add New Employee
employeeRoute.post('/addEmployee', async(req, res) => {
  const employee = await new employeeModel(req.body);
  console.log(employee);
  employee.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Get Employee Details By Employee ID
employeeRoute.get('/editEmployee/:id', async(req, res) => {
  const { id } = req.params;
  await employeeModel.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Update The Employee Details
employeeRoute.put('/updateEmployee/:id', async(req, res) => {
  const { id } = req.params;
  await employeeModel.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// To Delete The Employee
employeeRoute.delete('/deleteEmployee/:id', async(req, res) => {
  const { id } = req.params;
  await employeeModel.findByIdAndDelete(id).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = employeeRoute;