var express = require('express');
var router = express.Router();
var runnerController = require('../../controllers/api/runnerControllerAPI');


router.get('/', runnerController.runner_list);

router.post('/create', runnerController.runner_create);
router.delete('/delete', runnerController.runner_delete);


module.exports = router;