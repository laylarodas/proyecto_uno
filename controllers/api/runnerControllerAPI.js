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
        aRun: runner
    });
}

exports.runner_update_get = function(req, res){

    var runner = Runner.findById(req.body.id);

    res.status(200).json({
        aRun: runner
    });
}

exports.runner_update = function(req, res){
    var runner = Runner.findById(req.body.id);

    runner.id = req.body.id;
    runner.color = req.body.gender;
    runner.modelo = req.body.age;
    runner.ubicacion = [req.body.lat, req.body.lng];
    
    res.status(200).json({
        aRun: runner
    });
}


exports.runner_delete = function(req, res){
    Runner.removeById(req.body.id);
    res.status(204).send();
}