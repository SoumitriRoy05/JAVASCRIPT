//Write a program using javascript to generate an Unique Username Based on User Input

let fullName=prompt("Enter your full anme without space");
let userName="@"+fullName+fullName.length;
console.log(userName);
