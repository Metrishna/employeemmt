const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  joined_date: {
    type: Date,
    required:true
  },
  salary: {
    type: Number,
    required:true
  },
  
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema)