const { models } = require("mongoose");
const User = require("../models/index").User;
const {generate} = require('../middleware/auth')
const bcrypt = require('bcrypt');

exports.signin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ where: { email: email } })
    .then(user => {
      if(!user) {
        return res.status(400).send({
         error : "ERROR",
         message: "User not found"
        })
      }

      const isValid = bcrypt.compareSync(
        password,
        user.password
      )

      if(!isValid) {
        return res.status(400).send({
         error : "ERROR",
         message: "Username and password not match"
        })
      }

      res.status(200).send({
        status: "SUCCESS",
        message: "Login success", 
        token : generate({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        })
      })
    });
    
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    // validasi 
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    console.log(email)

    User.findOne({ where: { email: email } })
    .then(user => {
      if(user) {
        return res.status(400).send({
         error : "USER_CONFLICT_REGISTER",
         message: "Username Already Exists"
        })
      }


      bcrypt.hash(password, 10, function(err, hash) {        
        // Store hash in your password DB.
        return User.create({
            firstName: firstName,
            lastName: lastName, 
            email: email, 
            password: hash
        }).then(user => {
          res.status(200).send({
             status: "SUCCESS", 
             message: "Register is Success", 
             token : generate({
               id: user.id,
               firstName: user.firstName,
               lastName: user.lastName,
               email: user.email
             })
          })
      })
      });
    })
  } catch (err) {
    next(err);
  }
};
