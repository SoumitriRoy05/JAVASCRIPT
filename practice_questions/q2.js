//Design a JavaScript program that represents a user profile  including various attributes. Write a script that determines and logs the data type of the userName property using the typeof operator to demonstrate how to access object properties dynamically

const profile={
    userName: "shradhakhapra",
    num_posts: 195,
    num_followers: 569000,
    num_following: 4,
    name: " Shradha Khapra",
    account_type: "Enterprenuer",
    bio: "Apna College| Ex-microsoft, DRDO| To educate someone is the highest priviledge!"
};
console.log(typeof profile["userName"]);
