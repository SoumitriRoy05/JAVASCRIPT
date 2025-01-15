//items=[250,645,300,900,50]
//Write a program that applies  10% discount to each item and updates the prices in the array. Print the new price of each item after applying the discount.

let items=[250,645,300,900,50];
let idx=0;
for(let val of items)
    {
       let offer=val/10;
       items[i]=items[i]-offer;
       console.log(`value after offer=${items[i]}`);
        i++;
    }
