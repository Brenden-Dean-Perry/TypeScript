
// Interface example in TypeScript.
// Interfaces are used to define the structure of an object. They can be implemented by classes or used to type-check objects.
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

// Implementing the Vehicle interface in a class
class Car implements Vehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number)
    { }

    start(): void {
        console.log(`${this.make} ${this.model} is starting.`);
    }
    stop(): void {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}