/// Basic Syntax
/// The syntax uses the in operator to loop over keys:

type Mapped<T> = {
    [P in keyof T]: T[P];
};



/// Making All Properties Optional:
/// This is essentially what Partial<T> does.

type MyPartial<T> = {
    [P in keyof T]?: T[P];
};



/// Making All Properties Readonly:
/// Similar to Readonly<T>.

type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}



/// Mapping Property Types:
/// Transform all property types to a new type.

type Booleanify<T> = {
    [P in keyof T]: boolean;
}

interface FeatureFlags {
    darkMode: string,
    NewUI: number,
}

// Now every property in Booleanify<FeatureFlags> is a boolean.
type FeatureFlagsBoolean = Booleanify<FeatureFlags>;
// Equivalent to:
// type FeatureFlagsBoolean = {
//   darkMode: boolean;
//   newUI: boolean;
// };




/// Task 1: Create Your Own Mapped Types
/// Create custom mapped types to transform object properties.

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}

interface UserProfile67 {
    readonly id: number,
    name: string,
    email: string,
}

type MutableUserProfile67 = Mutable<UserProfile67>;
type NullableUserProfile67 = Nullable<UserProfile67>;

// Testing Mutable:
let user458: MutableUserProfile67 = {
    id: 678,
    name: "john",
    email: "john123@yahoo.com"
}
user458.name = "Bob";
console.log(user458);

// Testing Nullable:
let user459: NullableUserProfile67 = {
    id: 679,
    name: null,
    email: "bob123@yahoo.com"
}
console.log(user459);



/// Task 2: Combine Utility and Mapped Types
/// Use mapped types along with utility types to create a more complex type transformation.

interface setting {
    appearance: {
        theme: string,
        fontsize: number
    },
    account: {
        email: string,
        notifications: boolean
    }
}

// Recursive DeepPartial utility type
type DeepPartial<T> = {
    [P in keyof T]: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const partialSettings: DeepPartial<setting> = {
    account: {
        email: "hello123@yahoo.com",
        notifications: true
    },
    appearance: {
        fontsize: 5,
        theme: "dark"
    }
};