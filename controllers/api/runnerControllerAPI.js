var Runner = require('../../models/Runner');

exports.runner_list = function (req,res) {
    res.status(200).json({
        runners: Runner.allRunners
    })
}