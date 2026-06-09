"use strict";
// Implementing the Vehicle interface in a class
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
    stop() {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}
