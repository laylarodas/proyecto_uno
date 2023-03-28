var express = require('express');
var router = express.Router();
var runnerController = require('../controllers/runner');


router.get('/',runnerController.runner_list);
router.get('/create',runnerController.runner_create_get);
router.get('/:id/update',runnerController.runner_update_get);

router.post('/create',runnerController.runner_create_post);
router.post('/:id/update',runnerController.runner_update_post);
router.post('/:id/delete',runnerController.runner_delete_post);


module.exports = router;