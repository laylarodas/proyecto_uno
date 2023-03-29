var Runner = require('../../models/Runner');

exports.runner_list = function (req,res) {
    res.status(200).json({
        runners: Runner.allRunners
    })
}

exports.runner_create = function(req, res){
    var runner = new Runner(req.body.id, req.body.gender, req.body.age);
    runner.location = [req.body.lat, req.body.lng];
    Runner.add(runner);

    res.status(200).json({
        runner: runner
    });
}


exports.runner_delete = function(req, res){
    Runner.removeById(req.body.id);
    res.status(204).send();
}