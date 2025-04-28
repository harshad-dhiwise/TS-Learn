/// Named Functions:

function addi(a: number, b: number): number {
    return a + b;
}
console.log(`Addition is: ${addi(11, 3)}`);



/// Anonymous Functions:

const multiply = function (a: number, b: number): number {
    return a * b;
}
console.log(`Multiply is: ${multiply(11, 3)}`);



/// Optional and Default Parameters:

function animalCharacterristic(isFly: boolean, isSwim?: boolean): string {
    return isSwim ? "Yes they are swim and they are fly." : "Yes they only fly not swim.";
}
console.log(animalCharacterristic(false, true));



/// Rest Parameters:

function sum(...nums: Array<number>): number {
    return nums.reduce((prev, curr) => prev + curr, 0);
}
console.log(`Total is: ${sum(1, 2, 3, 4)}`);