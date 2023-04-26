const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(422).json({
          message: "User email already exists",
        });
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          password: req.body.password,
        });
        user
          .save()
          .then((result) => {
            res.status(201).json({
              message: "SIGNUP SUCCESS: User created",
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.login = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "LOGIN FAILED: user doesn't exists",
        });
      }
      let flag = req.body.password.localeCompare(user[0].password);
      if (flag === 0) {
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );

        return res.status(200).json({
          message: "LOGIN SUCCESS",
          token: token,
        });
      }
      res.status(401).json({
        message: "LOGIN FAILED: authentication failure",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then((result) => {
      res.status(200).json({ message: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
