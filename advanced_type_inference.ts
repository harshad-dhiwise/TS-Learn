/// Conditional Types with infer

type ReturnTyped<T> = T extends (...args: any[]) => infer R ? R : never;

type fn = (a: number, b: number) => string;
type FnReturnType = ReturnTyped<fn>;



/// Contextual Typing:

const nos = [1, 2, 34, 5, 6, 9];
const squareOfNos = nos.map(n => n * n);

console.log(squareOfNos);



/// Inference in Generics:

function wrapInArray<T>(value: T): T[] {
    return [value];
}

const wrapNumber = wrapInArray(50);

console.log(wrapNumber);



/// Task 1: Explore Advanced Type Inference with Conditional Types
/// Build a custom utility type using conditional types and the infer keyword.

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function exampleFunction(a: number, b: string): boolean {
    return a.toString() === b;
}

