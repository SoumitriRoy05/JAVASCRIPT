//companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//1. Using shift() operation remove 1st company from the array
//2. Using splice() replace third company with "OLA"
//3. Add "AMAZON" at the end of the array

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");
