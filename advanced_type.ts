/// Union Types

function formatValue(value: string | number): string {
    return typeof value === "number" ? value.toFixed(2) : value.toUpperCase();
}

console.log(formatValue("hello"));
console.log(formatValue(124.67678));



/// Intersection Types

interface drivable {
    drive(): void;
}

interface flyable {
    fly(): void;
}

type FlyingCar = drivable & flyable;

const MyCar: FlyingCar = {
    drive: () => console.log("This car is drive."),
    fly: () => console.log("This car is fly."),
};

MyCar.fly();
MyCar.drive();



/// Task 3: Use Union Types in a Function
/// Write a function that accepts a parameter with a union type and processes it differently based on its type.

function processValue(params: string | number): string {
    return typeof params === "string" ? `String lower-caes: ${params.toLowerCase()}` : `Number: ${params.toFixed(2)}`;
}

console.log(processValue("HI"));
console.log(processValue(565.7787));
