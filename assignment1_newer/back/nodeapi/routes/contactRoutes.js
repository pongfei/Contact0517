"use strict";
module.exports = function (app) {
  var userList = require("../controllers/contactController");

  app.route("/contact").get(userList.listAllUsers).post(userList.createAUser);

  app.route("/contact/delete/:id").delete(userList.deleteContact);

  app.route("/contact/update/:userId").put(userList.updateContact);

  app.route("/contact/search/:search").get(userList.searchContact);

  app.route("/login").post(userList.login);
};
