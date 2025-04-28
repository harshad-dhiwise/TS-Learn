/// typeof Operator:

function printValue(param: string | number | boolean) {
    if (typeof param === "string") {
        return `String value is : ${param.toUpperCase()}`;
    } else if (typeof param === "number") {
        return `Number is ${param.toFixed(2)}`;
    } else {
        return `Boolean value is : ${param}`
    }
}

console.log(printValue("Hello"));
console.log(printValue(true));
console.log(printValue(255.657));
// printValue([1, 3, 5, 7, 8, 9, 0]); // Give an error



/// instanceof Operator:

class Animal {
    name: string;

    constructor(nam: string) {
        this.name = nam;
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking...");
    }
}

function speak(anim: Animal) {
    if (anim instanceof Dog) {
        anim.bark();
    } else {
        console.log(`${anim.name} is Barking.`);
    }
}

const germanShaperd: Dog = new Dog("German shaperd");
speak(germanShaperd);



/// in Operator:

interface Admin {
    role: string
}

interface NormalUser {
    userName: string
}

type user = Admin | NormalUser;

function getInfo(person: user) {
    if ("role" in person) {
        return `Admin is ${person.role}`;
    } else {
        return `User name is ${person.userName}`;
    }
}

const admin: user = {
    // role: "Bob",
    userName: "Om"
};
console.log(getInfo(admin));



/// Custom Type Guards:

interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
    // return "swim" in pet; // also right
}

function move(pet: Fish | Bird): void {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

const fish: Fish = {
    swim: () => console.log("Fish is swim.")
}

const bird: Bird = {
    fly: () => console.log("Bird is fly.")
}

move(fish);
move(bird);



/// Task 1: Practice with Type Guards
/// Write a function that processes an input of union type(number | string) using a type guard.

function processInput(params: string | number) {
    if (typeof params === "string") {
        console.log(`String in upper-case: ${params.toUpperCase()}`);
    } else {
        console.log(`Number in upper-case: ${params.toFixed(2)}`);
    }
}

console.log(processInput(123.456));
console.log(processInput("typescript is tight coupled language."));



/// Task 2: Create a Custom Type Guard
/// Write a custom type guard function to differentiate between two interfaces.

interface Admins {
    adminId: number;
    privileges: string[];
}

interface Users123 {
    userId: number;
    userName: string;
}

type PersonType = Admins | Users123;

function isAdmin(personType: PersonType): personType is Admins {
    return (personType as Admins).privileges !== undefined;
}

function printPersonInfo(personType: PersonType) {
    if (isAdmin(personType)) {
        console.log(`Admin id is : ${personType.adminId} & privileges is : ${personType.privileges.join(', ')}`);
    } else {
        console.log(`User id is : ${personType.userId} & User name is : ${personType.userName}`);
    }
}

const admin123: Admins = {
    adminId: 456,
    privileges: ["system admin", "git admin"]
};

const users123: Users123 = {
    userId: 345,
    userName: "Mohan"
};

printPersonInfo(users123);