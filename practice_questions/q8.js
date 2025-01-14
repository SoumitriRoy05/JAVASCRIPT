//Write a program using javascript to calculate the total and average of student's marks

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks)
    {
        sum=sum+val;
    }
    console.log(sum);
    let avg=sum/marks.length;
    console.log(avg);
