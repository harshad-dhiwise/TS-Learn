// let str: string = "Hello friends";
// let bool: boolean = true;
// let num: number = 300;
// let arr: number[] = [10, 20, 30, 40, 50];

// console.log(`${str} \n${bool} \n${num} \n${arr}`);



/// Number:
/// Represents both integer and floating-point numbers.

let numInt: number = 2000;
let numFloat: number = 200.30;



/// String:
/// Used for textual data.

let str1: string = "Have a nice day";
let str2: string = `Greet: ${str1}`;



/// Boolean:
/// Represents true/false values.

let isOnline: boolean = true;



/// Array:
/// An ordered list of elements. You can define an array using two syntaxes:

let listOfProgramming: string[] = ["js", "ts", "dart", "python"];
let scores: Array<number> = [20, 50, 30, 40, 48];



/// Tuple:
/// Allows you to express an array with a fixed number of elements whose types are known.

let person: [string, number] = ["bob", 29];
let car: [string, string] = ["KIA", "seltos"];



/// Enum:
/// A way of defining a set of named constants.

enum Colors {
    "Red",
    "Green",
    "Blue",
}

let color: Colors = Colors.Blue;



/// Any:
/// A fallback type that disables type checking, useful for gradually migrating JavaScript code.

let anyData: any = "This variable assign any random value.";
anyData = 500;



/// Void:
/// Used for functions that do not return a value.

function logMessage(message: string): void {
    console.log(message);
}



/// Never:
/// Represents values that never occur, such as functions that always throw an error or have infinite loops.

function error(message: string): never {
    throw new Error(message);
}



/// Task 1: Experiment with Basic Types
/// Declare variables for numbers, strings, booleans, arrays, tuples, and enums.
/// Log these variables to the console.

let num11: number = 30;
let num12: number = 1.2;
console.log(`This is a int number ${num11}. \nThis is a float number ${num12}`);

let wishMsg: string = "Congratulations!";
let specialWish: string = `${wishMsg} Vinod`;
console.log(specialWish);

let isOffline: boolean = true;
console.log(`User is offline : ${isOffline}`);

let fruits: Array<string> = ["orange", "banana", "grapes", "apple"];
let carCompanyName: string[] = ["volvo", "bmw", "hyundai", "honda", "maruti suzuki", "kia"];
console.log(fruits);
console.log(carCompanyName);

let apiReponse: [number, string] = [200, "Ok"];
console.log(apiReponse);

enum size {
    Small = "small",
    Medium = "medium",
    Large = "large",
}
console.log(`T-shirt size is: ${size.Medium}`);



/// Task 2: Explore Type Inference
/// Write code that leverages type inference and observe how TypeScript assigns types.

let greeting1 = "Hello, typescript devs";
let total = 100;

function add(num1: number, num2: number) {
    return num1 + num2;
}

let nums = [3, 4, 5];
let squareOfNums = nums.map(n => n * n);

console.log(`${greeting1} ${total} ${add(10, 20)} ${squareOfNums}`);