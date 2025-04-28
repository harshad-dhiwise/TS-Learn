namespace Utilities {
    export function greet(name: string) {
        return `Hello, ${name}`;
    }

    export function farewell(name: string) {
        return `Have a great future ${name}`;
    }
}

console.log(Utilities.greet("geek"));
console.log(Utilities.farewell("om"));