/// Importing specific named exports

import { Sum, PI } from "./math_utills";

console.log(`Addition is: ${Sum(PI, 20)}`);



/// Alternatively, import all as a namespace

import * as MathUtills from "./math_utills";

console.log(MathUtills.subtract(20, 10));



/// import named export

import { multiply, divide } from "./named_export";

console.log(multiply(5, 5));



/// default export

import log from "./default_export";

log("hello");



/// Renaming Exports:

import { subtract as sub } from "./math_utills";

console.log(`90 - 45 = ${sub(90, 45)}`);
