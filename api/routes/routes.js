const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { convertText2Sql } = require("../controllers/text2SqlController");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/api/v1/text2sql', convertText2Sql);

module.exports = router;