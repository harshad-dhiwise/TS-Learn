/// Partial<T>

interface User23 {
    id: number,
    name: string,
    email: string
}

const updateUser = (user: Partial<User23>) => {
    // You can update one or more properties without providing all fields.
}

updateUser({ name: "Gom" });



/// Required<T>

interface config {
    host: string;
    port: number,
}

const conf: Required<config> = {
    host: "localhost",
    port: 8000,
};

console.log(conf.host);
console.log(conf.port);



/// Readonly<T>

interface settings {
    theme: string,
    version: number,
}

const setting: Readonly<settings> = {
    theme: "dark",
    version: 1.0,
};

console.log(setting);



/// Record<K, T>

type Roles = "admin" | "user" | "guest";
const rolePermission: Record<Roles, string[]> = {
    admin: ["create", "upadte", "read", "write"],
    user: ["read", "white"],
    guest: ["read"]
};



/// Pick<T, K>

interface peersona {
    id: number,
    name: string,
    age: number,
    email: string
}

type PersonContact = Pick<peersona, "name" | "email">;



/// Omit<T, K>

type peersonaWithoutAge = Omit<peersona, "age">;

// Other Useful Utilities:

// Exclude<T, U>: 
// Excludes from T those types that are assignable to U.

// Extract<T, U>: 
// Extracts from T those types that are assignable to U.

// NonNullable<T>: 
// Excludes null and undefined from T.

// ReturnType<T>: 
// Gets the return type of a function type.

// InstanceType<T>: 
// Gets the instance type of a constructor function type.



// Task 1: Experiment with Utility Types
// Use Partial, Required, Readonly, Pick, and Omit with a sample interface.

interface prod {
    id: number,
    name: string,
    price: number,
    description: string,
}

function updatePartialProduct(product: Partial<prod>) {

}

function creationRequiredProduct(product: Required<prod>) {

}

function readOnlyProduct(params: Readonly<prod>) {
    console.log(`Product: ${params.name}, $${params.price}`);
}

type ProductBasic = Pick<prod, "name" | "price">;
type ProductNoDescription = Omit<prod, "description">;