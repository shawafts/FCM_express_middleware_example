const express = require("express");
const notification = require("../middlewares/notification");
const resource = require("../controllers/resource");
const router = express.Router();

// Add notification middleware to the pipeline on required routes.
router.post("/resource", resource.addResource, notification);

module.exports = router;
