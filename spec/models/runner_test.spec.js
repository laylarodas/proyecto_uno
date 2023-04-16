var Runner = require('../../models/Runner');
var mongoose = require('mongoose');

describe('Testing Runners', function () {
    beforeEach(function (done) {
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
        

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open',function () {
            console.log('We are connected to test database!');
            done();
        });
    });
    afterEach(function (done) {
        Runner.deleteMany({})
        .catch(error => {
            console.log(error)
        });
        done();
    });

    describe('Runner.createInstance', () => {
        it('crea una instancia de Runner', () => {
            var runner = Runner.createInstance(1,"Female","26",[-34.5,-54.1]);
            
            expect(runner.code).toBe(1);
            expect(runner.gender).toBe("Female");
            expect(runner.age).toBe("26");
            expect(runner.location[0]).toEqual(-34.5);
            expect(runner.location[1]).toEqual(-54.1);
        });
    });


    describe('Runner.allRunners', () => {
        it('comienza vacia', (done) => {
            Runner.allRunners(function (err, runners) {
                expect(runners.length).toBe(0);
                done();
            })
        })
    });


    describe('Runner.add', () => {
            it('Agrega solo una runner', (done) => {
                var aRunner = new Runner({code: 1, gender: "Female", age: "26"});
                Runner.add(aRunner, function(err, newRunner){
                    if (err) console.log(err);
                    Runner.allRunner(function(err, runners){
                        expect(runners.length).toEqual(1);
                        expect(runners[0].code).toEqual(aRunner.code);
    
                        done();
                    });
                });
            });
        });
    
    describe('Runner.findByCode', () => {
        it('Debe devolver la runner con code 1', (done) => {
            Runner.allRunner(function(err, runners){
                expect(runners.length).toBe(0);

                var aRunner = new Runner({code: 1, gender: "Female", age: "26"});
                Runner.add(aRunner, function(err, newRunner){
                    if (err) console.log(err);

                    var aRunner2 = new Runner({code: 2, gender: "roja", age: "26"});
                    Runner.add(aRunner2, function(err, newRunner){
                        if (err) console.log(err);
                        Runner.findByCode(1, function(error, targetRunner){
                            expect(targetRunner.code).toBe(aRunner.code);
                            expect(targetRunner.gender).toBe(aRunner.gender);
                            expect(targetRunner.age).toBe(aRunner.age);
        
                            done();
                        });
                    });

                });
            });
            
        });
    });
    
    describe('Runner.removeByCode', () => {
        it('Debe eliminar la runner con code 1', (done) => {
            Runner.allRunner(function(err, runners){
                expect(runners.length).toBe(0);

                var aRunner = new Runner({code: 1, gender: "Female", age: "26"});
                Runner.add(aRunner, function(err, newRunner){
                    if (err) console.log(err);

                    var aRunner2 = new Runner({code: 2, gender: "roja", age: "26"});
                    Runner.add(aRunner2, function(err, newRunner){
                        if (err) console.log(err);

                        Runner.removeByCode(1, function(error, targetRunner){
                            Runner.allRunner(function(err, runners){
                                expect(runners.length).toBe(1);
                                done();
                            });
                        });
                    });

                });
            });
            
        });
    });

    
});




/*
beforeEach(() => { Runner.allRunners = []; }); // para vaciar la lista

describe('Runner.allRunners', () => {
    it('Comienza vacía', () => {
        expect(Runner.allRunners.length).toBe(0);
    })
});

describe('Runner.add', () => {
    it('Agregamos una', () => {
        expect(Runner.allRunners.length).toBe(0);

        var a = new Runner(1,'female','27',[-34.6012424,-58.3861497]);
        Runner.add(a);

        expect(Runner.allRunners.length).toBe(1);
        expect(Runner.allRunners[0]).toBe(a);
    })
});


describe('Runner.findById', () => {
    it('Debe devolver el runner id 1', () => {
        expect(Runner.allRunners.length).toBe(0);

        var aRunner = new Runner(1,"Female","24");
        var aRunner2 = new Runner(2,"Male","31");

        Runner.add(aRunner);
        Runner.add(aRunner2);

        var targetRunner = Runner.findById(1);
        expect(targetRunner.id).toBe(1);
        expect(targetRunner.gender).toBe(aRunner.gender);
        expect(targetRunner.age).toBe(aRunner.age);
    })
});
*/