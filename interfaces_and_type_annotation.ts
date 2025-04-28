interface UserData {
    id: number,
    name: string,
    isActive: boolean,
}

function printUser(user: UserData): void {
    console.log(`User id: ${user.id} \nUser name: ${user.name} \nUser is active: ${user.isActive}`);
}

const userData: UserData = { id: 1, name: "sodhi", isActive: true };
printUser(userData);



/// Task 1: Combine Basic Types and Inference in a Small Project
/// Create a small program that uses both explicit types and type inference.

interface UserProfile {
    id: number,
    name: string,
    isActive: boolean,
}

function formatUserProfile(userProf: UserProfile) {
    return `User id is ${userProf.id}.\nUser name is ${userProf.name}.\nUser is active ${userProf.isActive ? "online" : "offline"}.`;
}

let userProf: UserProfile = { id: 12, name: "Nirmal", isActive: false };
formatUserProfile(userProf);