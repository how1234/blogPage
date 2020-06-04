




function Car(model,year){
    this.model = model
    this.year = year

    this.toString = function(){
        return `${this.model} has done ${this.year}`
    }
}


var car1 = new Car('car1',2019)
var car2 = new Car('car2',2020)


console.log(car1.toString());

console.log(car2.toString())


console.log(car1.toString === car2.toString);


Car.prototype.toString = function(){
    return `${this.model} has done ${this.year}`
}

console.log(car1.toString());

console.log(car2.toString())


console.log(car1.toString === car2.toString);



