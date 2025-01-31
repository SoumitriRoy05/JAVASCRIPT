// var name="Soumitri";
// name=name.toUpperCase();
// name=name.toLowerCase();


var name=prompt("What is your name?");
var firstChar=name.slice(0,1);
var uperCaseFirstChar=firstChar.toUpperCase();
var restofName=name.slice(1,name.length);
var capitalisedName=upperCasefirstChar + restofName;
alert("hello," + capitalisedName);