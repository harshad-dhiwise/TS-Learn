/// Initial Assignment:
/// When you initialize a variable, TypeScript examines the value and assigns a corresponding type.

let message = "I am a typescript developer.";
let count = 0;



/// Function Return Types:
/// If a function returns a value without an explicit return type, TypeScript infers the type from the returned expression.

function greeting() {
    return "Hello, world";
}



/// Contextual Typing:
/// TypeScript can also infer types in contexts like function parameters, especially when used as callbacks.

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);