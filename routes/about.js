var express = require('express');
var router = express.Router();
const aboutCtrl = require("../controllers/about")

/* GET users listing. */
router.get('/', aboutCtrl.index)

module.exports = router;
