'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
  
      this.belongsTo(models.Student, {
        foreignKey: 'student_id'
      })
    }
  };
  StudentScore.init({
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentScore',
    underscored: true,
    tableName: 'StudentScores'
  });
  return StudentScore;
};