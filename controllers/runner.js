var Runner = require('../models/Runner');

exports.runner_list = function (req,res) {
    res.render('runners/index', {runners: Runner.allRunners});
}


exports.runner_create_get = function (req,res) {
    res.render('runners/create');
}



exports.runner_create_post = function (req,res) {
    var runner = new Runner(req.body.id, req.body.gender, req.body.age);
    runner.location = [req.body.lat, req.body.lng];
    Runner.add(runner);

    res.redirect('/runners');
}

exports.runner_update_get = function (req,res) {
    var runner = Runner.findById(req.params.id);

    res.render('runners/update', {runner});
}



exports.runner_update_post = function (req,res) {
    var runner = Runner.findById(req.params.id);

    runner.id = req.body.id;
    runner.gender = req.body.gender;
    runner.age = req.body.age;
    runner.location = [req.body.lat, req.body.lng];

    res.redirect('/runners');
}




exports.runner_delete_post = function (req, res) {
    Runner.removeById(req.body.id);


    res.redirect('/runners');
}

