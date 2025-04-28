type Direction = "North" | "East" | "West" | "South";

function Move(direction: Direction): void {
    console.log(`move to ${direction}`);
}

Move("North");



/// Task 4: Combine Intersection and Literal Types
/// Create an interface for an object that must satisfy multiple contracts and limit a property to specific literal values.

interface Identifiable {
    id: number;
}

interface Timestamped {
    createdAt: string;
}

type netStatus = "active" | "inactive";

type Entity = Identifiable & Timestamped & { status: Status };

const emp1: Entity = {
    id: 123,
    createdAt: "20, jan, 2020",
    status: "complete"
}

console.log(emp1);
