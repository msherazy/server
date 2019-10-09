const express = require("express");
const router = express.Router();

const controller = require("../controller/customer");

//  Description: Create new Customers
router.post("/", controller.register);

//  Description: login
router.post("/login", controller.login);

module.exports = router;
