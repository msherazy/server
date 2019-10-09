const express = require("express");
const router = express.Router();

const controller = require("../controller/user");

//  Description: Create new Customers
router.post("/", controller.register);

//  Description: GET User
router.get("/", controller.getUser);

// router.get("/:id",controller.getCustomer1);

//  Description: login
router.post("/login", controller.login);

module.exports = router;