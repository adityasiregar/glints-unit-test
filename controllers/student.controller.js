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
      raw:true,
      include:{ 
        model: StudentScore,
        attributes: [
          'course_id',
          'score'
        ],        
        as: "scores",
        include: {
          model: Course,         
          attributes: ['name'],
          as: "courses"
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
