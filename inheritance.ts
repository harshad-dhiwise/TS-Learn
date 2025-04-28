class Workers {
    public id: number;
    private salary: number;
    protected department: string;

    constructor(id: number, salary: number, department: string) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary;
    };
}



/// Extending a Class:

class Managers extends Workers {
    bonus: number;

    constructor(id: number, salary: number, department: string, bonus: number) {
        super(id, salary, department);
        this.bonus = bonus;
    }

    getTotalCompensation(): number {
        return this.getSalary() + this.bonus;
    }
}



/// Method Overriding:

class SeniorManager extends Managers {
    getTotalCompensation(): number {
        // Enhanced logic for senior managers
        return super.getTotalCompensation() * 1.1;
    }
}



/// Task 2: Implement Inheritance
/// Create a subclass Employee that extends Person and adds additional properties and methods.

class Employees extends Persona {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    displayInfo() {
        return `${this.introduce()}\nEmployee id is ${this.employeeId}`
    }
}