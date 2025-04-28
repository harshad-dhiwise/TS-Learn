/// Class Decorators:

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(`${constructor.name} is sealed.`);
}

@sealed
class SealedClass {
    property: string = "This is sealed";
}

const sealedInstance = new SealedClass();
console.log(sealedInstance.property);



/// Method Decorators:

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}: with ${args}`);
        const result = originalMethod.apply(this, args);

        console.log(`Result is ${result}`);
        return result;
    }

    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}



/// Task 1: Create a Method Decorator
/// Write a method decorator that logs the method name and its arguments before execution.

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with arguments: ${args}`);
        return originalMethod.apply(this, args);
    }
    return descriptor;
}

class MathOperation {
    @logMethod
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const mathOpe = new MathOperation();
mathOpe.multiply(2, 4);