//Write a program using javascript by creating a simple guessing game where the user is prompted to guess a specific number.

let gameNum=24;
let userName=prompt("Guess the game number:");
while(userName!=gameNum)
    {
userName= prompt("u entered wrong num, enter again");
    }
    console.log("u entered the rgt number");