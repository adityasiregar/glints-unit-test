'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Students', [{
    //   id: 1,
    //   name: 'John',
    //   major: 'Doe',
    //   address: 'JohnDoe@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   id: 2,
    //   name: 'Dodo',
    //   major: 'Doe',
    //   address: 'Dodo@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   id: 3,
    //   name: 'Lingard',
    //   major: 'Best Assist',
    //   address: 'lingard@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Courses', [{
    //   id: 1,
    //   name: 'Alogirthm',
    //   lectureName: 'Doe',
    //   description: 'JohnDoe@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   id: 2,
    //   name: 'Physic',
    //   lectureName: 'XIXI',
    //   description: 'asdasdasdas@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, 
    // {
    //   id: 3,
    //   name: 'Math',
    //   lectureName: 'XAXA',
    //   description: 'asdasd@gmail.com',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    await queryInterface.bulkInsert('StudentScores', [{
      student_id : 1, 
      course_id : 1,
      score: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 1, 
      course_id : 2,
      score: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 1, 
      course_id : 3,
      score: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      student_id : 2, 
      course_id : 1,
      score: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 2, 
      course_id : 2,
      score: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 2, 
      course_id : 3,
      score: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      student_id : 3, 
      course_id : 1,
      score: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 3, 
      course_id : 2,
      score: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      student_id : 3, 
      course_id : 3,
      score: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
