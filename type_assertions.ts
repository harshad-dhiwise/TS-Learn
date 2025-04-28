/// Angle Bracket Syntax: (This syntex generate error)

// const someValue: any = "Some value";
// const strLen: number = (<string>someValue).length;

// console.log(strLen);



/// as Syntax:

const someValue: any = "Some Value";
const strLen: number = (someValue as string).length;

console.log(strLen);
