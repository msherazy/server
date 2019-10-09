const express = require("express");
const router = express.Router();

const controller = require("../controller/cook");

//  Description: Create new Customers
router.post("/", controller.register);

//  Description: GET Customers
router.get("/", controller.getCook);

// router.get("/:id",controller.getCustomer1);

//  Description: login
router.post("/login", controller.login);

module.exports = router;
