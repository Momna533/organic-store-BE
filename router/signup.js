const express = require("express");
const { getAllUsers, createUser, deleteUser } = require("../controller/signup");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
