//Modules
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

//Routes
router.get("/", controller.list);
router.post("/add", controller.add);
router.get("/delete/:id", controller.delete);
router.get("/update/:id", controller.edit);
router.post("/update/:id", controller.update);

//Exports
module.exports = router;