class User {
    userName: string;
    email: string;

    constructor(userName: string,
        email: string) {
        this.userName = userName;
        this.email = email;
    }

    displayInfo(): void {
        console.log(`User name is : ${this.userName} & email is : ${this.email}`);
    }
}

const user2:User = new User("rohan", "rahan@yahoo.com");
user2.displayInfo();