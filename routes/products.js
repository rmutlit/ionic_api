const express = require('express');
const router = express.Router();
const controller = require("../controllers/productsController");

/* GET users listing. */
router.get("/", controller.index);
router.post("/insert", controller.insert);

module.exports = router;
