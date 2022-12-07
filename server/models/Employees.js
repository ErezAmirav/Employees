const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
// Inserting the schema to the mongoose, create this schema if it doesn't exist
const Employees = mongoose.model('EmployeesData', EmployeesSchema);
module.exports = Employees;
