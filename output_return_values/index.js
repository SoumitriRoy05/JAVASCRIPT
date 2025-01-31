function getMilk(money)
{
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numofBottles=Math.floor(money/1.5);
    console.log("buy" +numofBottles + "bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%1.5;
}
function calcBottles( startingMoney, costPerBottle)
{
    var numofBottles=Math.floor(startingMoney/costPerBottle);
    return numofBottles;
}
function calcChange(startingAmount, costPerBottle)
{
    var change=startingAmount%costPerBottle;
    return change;
}
var change=getMilk(4);
console.log(change);