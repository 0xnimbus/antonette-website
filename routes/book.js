var express = require('express');
var router = express.Router();
const bookCtrl = require("../controllers/book")

/* GET home page. */
router.get('/', bookCtrl.index)

module.exports = router;