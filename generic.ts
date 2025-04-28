/// Generic Functions:

function Value<T>(val: T): T {
    return val;
}

// Usage:
const str = Value<string>("hello");
const num10 = Value<number>(10);



/// Generic Classes:

class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

// Usage:
const numBox = new Box<number>(5);
const strBox = new Box<string>("typescript");



/// Generic Constraints:

interface LengthWise {
    length: number,
}

function logLen<T extends LengthWise>(item: T): T {
    console.log(item.length);
    return item;
}

logLen("Hello");



/// Task 1: Implement a Generic Function
/// Create a generic function that reverses an array.

function reverseArr<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

const numsLst = [1, 2, 44, 5, 6, 6];
const reverseNumsLst = reverseArr(numsLst);
console.log(reverseNumsLst);

const strLst = ["first", "second", "third"];
const reverseStrLst = reverseArr(strLst);
console.log(reverseStrLst);



/// Task 2: Create a Generic Class
/// Build a generic class that acts as a container for values.

class Container<T> {
    value: T;

    constructor(val: T) {
        this.value = val;
    }

    getValue(): T {
        return this.value;
    }

    setValue(updateVal: T): void {
        this.value = updateVal;
    }
}

const numbersContainer = new Container(10);
// numbersContainer.setValue(20);
console.log(numbersContainer.getValue());

const strContainer = new Container("Hello");
console.log(strContainer.getValue());
strContainer.setValue("hi");
console.log(strContainer.getValue());