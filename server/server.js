const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
const colors = require('colors/safe');
const cors = require('cors');

const EmployeesModel = require('./models/Employees');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());

connectDB();

app.post('/insert', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const position = req.body.position;
  const phone = req.body.phone;

  const employee = new EmployeesModel({
    firstName: firstName,
    lastName: lastName,
    position: position,
    phone: phone,
  });
  try {
    await employee.save();
  } catch (err) {
    console.log(err);
  }
});

app.put('/update', async (req, res) => {
  const newPosition = req.body.newPosition;
  const id = req.body.id;
  try {
    await EmployeesModel.findById(id, (err, updatedPosition) => {
      updatedPosition.position = newPosition;
      updatedPosition.save();
      res.send('update');
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/read', async (req, res) => {
  EmployeesModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  await EmployeesModel.findByIdAndRemove(id).exec();
  res.send('deleted')
});

app.listen(process.env.PORT, () => {
  console.log(
    colors.yellow.bold(`Server is running on port ${process.env.PORT}`)
  );
});
