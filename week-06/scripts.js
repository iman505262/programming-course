console.log("Hello")
let username="Iman"
document.body.innerHTML += "Hello"


//compersion operaters

// === strict equal

// !== not equal

console.log(1===1);
console.log(1!==1);

let score=85;
if (score>89){
    console.log("you got an A");
}

else if(score>79){
    console.log("you got an B";)
}

else if(score>69){
    console.log("you got an C");
}


else(
    console.log("you have a medioce grade");
)



let age=25;
let isMemeber=true;
if (age>=18){
    if(isMemeber){
        console.log("Adult memeber benefits applied");
    }
    else{
        console.log("Adult, but no memebership")
    }
    
} else{
    console.log("Minor")
}






//we used propmt()to make our website more interactive
let score=85; //this verbale is hardcorded , user cant change this 
let score=Number(prompt{"Enter your score (0-100"});
//input is a string data tupe, we must it to the number data type

if (score >= 90) {
    console.log("A");
} else if (score >=80) {
    console.log("B");
} else if (score >=70) {
    console.log("F");
}

// i want the website to ask the user for thier name, and then disple "Hello {name}"
// documents.body.innerHTMl 

let username=prompt("What is my name")
document.body.innerHTML += "<p>Hello" +username + "</P";