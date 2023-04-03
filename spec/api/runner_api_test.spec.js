var Runner = require('../../models/Runner');
var request = require('request');
var server = require('../../bin/www');


beforeEach(() => { Runner.allRunners = []; });


describe('Runner API', () => {
    describe('GET RUNNERS /', () => {
        it('Status 200', () => {
            expect(Runner.allRunners.length).toBe(0);

            var a = new Runner(1,"Female","23",[-34.6012424,-58.3861497]);

            request.get('http://localhost:3000/api/runners', function(error,response,body){
                expect(response.statusCode).toBe(200);
            });
        });
    });
    describe('POST RUNNERS /create', () => {
        it('STATUS 200', (done)=>{
            var headers = {'content-type' : 'application/json'};
            var aRunner = '{"id": 10, "gender":"Female","age":"26","lat": -34, "lng":-54}';

            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/runners/create',
                body: aRunner
            }, function (error,response,body) {
                expect(response.statusCode).toBe(200);
                expect(Runner.findById(10).gender).toBe('Female');
                done();
            })
        })
    })
})