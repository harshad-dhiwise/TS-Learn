/// Object Shape Declaration
/// Optional Properties
/// Readonly Properties

interface Vehicles {
    model: string,
    companyName: string,
    readonly wheel: number,
    manufacturingYear?: number
};

/// Extending Interfaces

interface Unicorn extends Vehicles {
    engineCC: number,
    engineGen: string,
};



/// Task 1: Create and Use an Interface
/// Define an interface for a user and create a function that uses it.

interface UserInformation {
    id: number,
    name: string,
    email: string,
};

function userDataFormatted(userInformation: UserInformation) {
    console.log(`id: ${userInformation.id}\nname : ${userInformation.name}\nemail : ${userInformation.email}\n`);
}

const userInformation: UserInformation = { id: 1, name: "john", email: "john23@yahoo.com" };
userDataFormatted(userInformation);



/// Task 2: Extend an Interface
/// Practice interface extension to model more specific data.

interface Person {
    name: string,
    age: number,
};

interface Employee extends Person {
    empId: number,
    designation: string,
}

function displayEmpInfo(employee: Employee) {
    console.log(`Employee name: ${employee.name}, age: ${employee.age}, employee id: ${employee.empId} & designation: ${employee.designation}`);

}

const emp: Employee = {
    name: "Bob",
    age: 30,
    empId: 102,
    designation: "sde-1"
};

displayEmpInfo(emp);