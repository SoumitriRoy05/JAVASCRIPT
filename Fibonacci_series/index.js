// Develop a JavaScript function that generates the Fibonacci sequence up to a given number of terms. The function should take an integer 𝑛 n as input and return an array containing the first 𝑛 n numbers of the Fibonacci sequence.

function fibonacciGenerator()
{
    var output=[];
    if(n===1)
    {
        output=[0];
    }
    else if(n===2)
    {
        output=[0,1];
    }
    else{
        output=[0,1];
       for(var i=2;i<n;i++)
       {
        output.push( output[output.length-2]+output[output.length-1]);
       }
    }
    return output;
}
output=fibonacciGenerator(4);
console.log(output);
