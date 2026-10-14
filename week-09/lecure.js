console.log("linked")

//What is funtion?
//reusable block of code desigend perform a specific task


function greetuser(){
    console.log("Hello there");
}

greetuser(); //calls (excutes) the function


//function structure
// keyword, function; tells js we are defining a function
// name, idenify the function
// peramaters, veriables inside the parentheses that receive data
//body, the code bettween()


//parameters and arguments

//paramete: parameter when defining a function

// Agrements: actual value when celling it

function greet(name){//name is a parameter
    console.log("hello"+ name)
}

greet("Iman"); // "Iman is the argument"



// function that will add two number together 
//then console the total


function addNumbers(a,b){
    return(a+b);

}

let total=addNumbers(4,6);
console.log("The total is:" + total)

//return send a value back to where the funtion was called
//console.log() just prints it

//return is like your function handing you back a notes with the answer written on it
//console.log is your function yelling the answer out loud, we hear it but we cant use it again

function mulitply(x,y){
    return x*y
}

let result=mulitply(15,15);
console.log(result); //225

//create me a funtion that will count to 5 by 1s



function countToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

countToN(5);



//Nested function 
//function can call another function inside of it 

function square(num){
    return num*num;
}

function printsquare(num){
    console.log("square is: " + square(num));
}

printsquare(6); //36

//geers the user, asks for thier name, then prints it
function username(){
    let name=propmt("What's your name?");
    console.log("Welcome," + name);
}

username();