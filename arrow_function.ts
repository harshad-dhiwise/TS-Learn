/// Basic Syntax:

const subtract = (a: number, b: number): number => a - b;
console.log(subtract(20, 80));



/// Block Body Arrow Functions:

const divide = (a: number, b: number): number => {
    if (b == 0) {
        throw new Error("Invalid number.");
    }

    return a / b;
};
console.log(`divide is: ${divide(10, 2)}`);



/// Lexical Scoping of this:

class Counter {
    count: number = 0;

    increment = (): void => {
        this.count++;
        console.log(this.count);
    };
}

const counter = new Counter();
setTimeout(counter.increment, 1000);



/// Task 1: Basic Function Creation
/// Create a function that performs a simple mathematical operation.

const subtracted = function (a: number, b: number): number {
    return a - b;
};
console.log(`Subtracted value is: ${subtract(90, 20)}`);



/// Task 2: Convert to Arrow Function
/// Convert a traditional function to an arrow function.

const subtractedWithArrowFunc = (a: number, b: number): number => a - b;
console.log(`Subtracted value is: ${subtractedWithArrowFunc(90, 60)}`);



/// Task 3: Optional, Default, and Rest Parameters
/// Create functions demonstrating optional /default parameters and rest parameters.

const createGreeting = (name: string, greeting: string = "Hello,") => {
    return `${greeting} ${name}`;
};

const sumNumbers = (...numbers: number[]) => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

console.log(createGreeting("naman"));
console.log(createGreeting("naman", "Hava a good day."));
console.log(`Total is: ${sumNumbers(2, 4, 6)}`);



/// Task 4: Exploring this in Functions vs. Arrow Functions
/// Understand the difference in this binding.

class Timer {
    count = 0;

    // Decalare traditional way
    incrementTraditinalWat() {
        this.count++;
        console.log(`Counter value is: ${this.count}`);
    }

    // Declare using arrow function
    incrementWithArrowFunc = () => {
        this.count++;
        console.log(`Counter value is: ${this.count}`);
    };
}

const timer = new Timer();

setTimeout(timer.incrementTraditinalWat, 1000);

setTimeout(timer.incrementWithArrowFunc, 2000);