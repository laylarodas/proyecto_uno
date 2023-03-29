var Runner = function (id, gender, age, location) {
    this.id = id;
    this.gender = gender;
    this.age = age;
    this.location = location;
    
}

Runner.prototype.toString = function () {
    return 'id: ' + this.id + " | gender: " + this.gender;
}

Runner.allRunners = [];
Runner.add = function (aRunners) {
    Runner.allRunners.push(aRunners);
}

Runner.findById = function(aRunnerId){
    var aRunner = Runner.allRunners.find(x => x.id == aRunnerId);
    if(aRunner)
        return aRunner;
    else
        throw new Error(`There is no runner with this id:  ${aRunnerId}`);
}


Runner.removeById = function(aRunnerId){
    for(var i = 0; i < Runner.allRunners.length;i++){
       if(Runner.allRunners[i].id == aRunnerId){
            Runner.allRunners.splice(i,1);
            break;
        }
    }
}



var a = new Runner(1,'female','27',[-34.6012424,-58.3861497]);
var b = new Runner(2,'male','24',[-34.596932,-58.3808287]);


Runner.add(a);
Runner.add(b);


module.exports = Runner;