//why use loops?
//repeat code multiple times, without duplicating code 

// the wile loop
while(condition){
    //code to run repeadly, if condition is true
    //infinite loops, make sure something inside change the condition
}

//basic program that is going count from 1-5, and will display it via console
let count=0; //this is our starting point,inialize loop control variable
while(count<=5){  //checks condition, if true everthing in brackets runs
    console.log("count is: "+count);
    count++;  //increment to aviod infintite loop
}


//for loop
for(initialization; condition;final-expression){
    //repeated code
}


for(let i=1;i<=5; i++){
    console.log("i is:"+i)

}


//let i +1, is our starting poiint
//i<+1, means to stop when greater than 5
//i++, we are counting by 1
//why for is clearInterval, all loop logic is in one AudioListener, easier to read imo


//program that lets the user pick what number to count to 
let num=number(prompt("pick a number:"));
for (let i=1; i<=num;i++){
    console.log(i);
}




//classic triangle loop pattern
let triangle="";
for(let line=1;line<=7;line++){
    triangle+="*";
    console.log(triangle)
}