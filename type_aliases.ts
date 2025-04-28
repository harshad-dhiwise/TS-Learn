/// Alias for Primitive Types:
type int = number;
let num: int = 30;



/// Union and Intersection Types:
type Status = "starting" | "process" | "progess" | "complete";
type apiResponse = { suecess: boolean } & { data: any };



/// Function Types:
type GreetFunction = (name: string) => string;
let greet1: GreetFunction = (name) => `hello, ${name}`;



/// Task 1: Create and Use Type Aliases
/// Define type aliases for complex types and functions.

type swichBoard = "Turn off" | "Turn on" | "Faulty";

function operator(switchOper: swichBoard) {
    console.log(`Tube-light is ${switchOper}.`);
}

operator("Turn on");

type WishFunction = (name: string) => string;
const newCar: WishFunction = (name) => `great wish for ${name}`;
newCar("jeck");



// Task 2: Comparing Interfaces and Type Aliases
// Understand when to use an interface versus a type alias.

interface PointInterfaces {
    x: number,
    y: number,
}

type PointType = {
    x: number,
    y: number,
}

function pointInterfaceFunc(pointInterfaces: PointInterfaces) {
    console.log("\n Run point interface...\n");
    console.log(`point x is ${pointInterfaces.x} & point y is ${pointInterfaces.y}`);
}

function pointTypeFunc(pointType: PointType) {
    console.log("\n Run point type...\n");
    console.log(`point x is ${pointType.x} & point y is ${pointType.y}`);
}

const pointInterfaces: PointInterfaces = { x: 70, y: 40 };
pointInterfaceFunc(pointInterfaces);

const pointType: PointType = { x: 20, y: 40 };
pointTypeFunc(pointType);
