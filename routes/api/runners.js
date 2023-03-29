var express = require('express');
var router = express.Router();
var runnerController = require('../../controllers/api/runnerControllerAPI');


router.get('/', runnerController.runner_list);


module.exports = router;