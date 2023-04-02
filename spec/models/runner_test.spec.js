var Runner = require('../../models/Runner');


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