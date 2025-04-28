class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}



// Access Modifiers:
//   Control the visibility of class members.
//      public: Accessible anywhere(default ).
//      private: Accessible only within the class.
//      protected: Accessible within the class and its subclasses.

class Employee {
    public id: number;
    private salary: number;
    protected department: string;

    constructor(id: number, salary: number, department: string) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getSalary = (): number => {
        return this.salary;
    };
}



/// Task 1: Create a Basic Class
/// Define a Person class with properties, a constructor, and a method.

class Persona {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `My name is : ${this.name}\nMy age is : ${this.age}`;
    }
}

const persona = new Persona("Rohit", 70);
console.log(persona.introduce());
