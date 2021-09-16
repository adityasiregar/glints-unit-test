const { models } = require("mongoose");
const Student = require("../models/index").Student;
const StudentScore = require("../models/index").StudentScore;
const Course = require("../models/index").Course;
const Sequelize = require('sequelize');

const {generate} = require('../middleware/auth')
const bcrypt = require('bcrypt');

exports.studentScore= async (req, res, next) => {
  try {  
    Student.findAll({
      include:{ 
        attributes: [
          'course_id',
          'score',    
        ],
        model: StudentScore,
        include: {
          model: Course,         
          attributes: ['name']
        }
      }
    }).then(data=> {
      res.status(200).send({
        data: data
      })
    })
  } catch (err) {
    next(err);
  }
};
