const express = require("express");
const router = express.Router();
const { getUsers, getSingleUser } = require("../controllers/users");

router.route("/").get(getUsers);
router.route("/:id").get(getSingleUser);

module.exports = {
  users_routes: router,
};
