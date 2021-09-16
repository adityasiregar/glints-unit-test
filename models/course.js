'use strict';
const {
  Model
} = require('sequelize');

const Student = require('./student');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.StudentScore)
    }
  };
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    lectureName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });

  return Course;
};