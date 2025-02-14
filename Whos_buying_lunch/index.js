// You are organizing a lunch outing with a group of friends, and you want to randomly select one person to pay for everyone's meal.Write a function whoPayingLunch(names) that takes an array of names as input and returns a string announcing who will buy lunch today. The selection should be random, ensuring that each person in the list has an equal chance of being chossen.

function whoPayingLunch(names)
{
    var numberOfPeople=names.length;
    var randomPersonPosition=Math.floor(Math.random()*numberOfPeople);
    var randomPerson=names[randomPersonPosition];
    return randomPerson + "is going to buy lunch today!";
}
