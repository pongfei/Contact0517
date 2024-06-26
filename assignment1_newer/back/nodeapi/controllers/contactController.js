// "use strict";
// var mongoose = require("mongoose");
// var { User, Login } = require("../models/contactModel");
// var crypto = require('crypto');

// exports.login = function(req, res) {
//   const { username, password } = req.body;
//   const encryptedPassword = crypto.createHash('md5').update(password).digest('hex'); // Encrypt the password

//   console.log(`Attempting login with username: ${username} and encrypted password: ${encryptedPassword}`);

//   // Check if the username and password are valid
//   Login.findOne({ username: username, password: encryptedPassword }, function(err, user) {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//       return;
//     }

//     if (!user) {
//       res.status(401).send('Invalid credentials');
//       return;
//     }

//     res.send('Login successful');
//   });
// };

// exports.deleteContact = function (req, res) {
//   User.findByIdAndRemove(req.params.id, function (err, user) {
//     if (err) {
//       res.status(500).send("Error deleting contact");
//       return;
//     }
//     const response = {
//       message: "Delete user id: " + req.params.id + " successfully",
//     };
//     res.json(response);
//   });
// };

// exports.updateContact = function (req, res) {
//   var newUser = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     mobile: req.body.mobile,
//     email: req.body.email,
//     facebook: req.body.facebook,
//     imgurl: req.body.imgurl
//   };
  
//   User.findByIdAndUpdate(req.params.userId, newUser, { new: true }, function (err, user) {
//     if (err) { 
//       res.status(500).send('Error updating contact');
//       return;
//     }
//     res.json(user);
//   });
// };

// exports.listAllUsers = function (req, res) {
//   var query = {};
//   User.find({}, null, query, function (err, user) {
//     if (err) throw err;
//     res.json(user);
//   });
// };

// exports.createAUser = function (req, res) {
//   var newUser = new User(req.body);
//   newUser.save(function (err, user) {
//     if (err) throw err;
//     res.json(user);
//   });
// };

// exports.searchContact = function (req, res) {
//   const search = req.params.search;
//   User.find({
//     $or: [
//       { firstName: { $regex: search, $options: "i" } },
//       { lastName: { $regex: search, $options: "i" } },
//     ],
//   })
//   .then((contacts) => {
//     res.send(contacts);
//   })
//   .catch((error) => {
//     console.log(error);
//     res.status(500).send("Internal server error");
//   });
// };

"use strict";
var mongoose = require("mongoose");
var { User, Login } = require("../models/contactModel");
var crypto = require('crypto');

exports.login = function(req, res) {
  const { username, password } = req.body;
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex'); // Encrypt the password

  console.log(`Attempting login with username: ${username} and encrypted password: ${encryptedPassword}`);

  // Check if the username and password are valid
  Login.findOne({ username: username, password: encryptedPassword }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    if (!user) {
      res.status(401).send('Invalid credentials');
      return;
    }

    res.send('Login successful');
  });
};

exports.deleteContact = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(500).send("Error deleting contact");
      return;
    }
    const response = {
      message: "Delete user id: " + req.params.id + " successfully",
    };
    res.json(response);
  });
};

exports.updateContact = function (req, res) {
  var newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    email: req.body.email,
    facebook: req.body.facebook,
    imgurl: req.body.imgurl
  };
  
  User.findByIdAndUpdate(req.params.userId, newUser, { new: true }, function (err, user) {
    if (err) { 
      res.status(500).send('Error updating contact');
      return;
    }
    res.json(user);
  });
};

exports.listAllUsers = function (req, res) {
  var query = {};
  User.find({}, null, query, function (err, user) {
    if (err) throw err;
    res.json(user);
  });
};

exports.createAUser = function (req, res) {
  var newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err) throw err;
    res.json(user);
  });
};

exports.searchContact = function (req, res) {
  const search = req.params.search;
  User.find({
    $or: [
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
    ],
  })
  .then((contacts) => {
    res.send(contacts);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send("Internal server error");
  });
};
