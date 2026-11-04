//select the form elemnt

const from=document.getElementById("contactform");
//listen for the submit event
from.addEventListener("submit", function(event){
    event.preventDefault(); //this stop the page from reloading when user submit form
    //Get the input value
    const name=document.getElementById("name").Value;
    //in the console, state Hello "username"
    console.log("Hello,",name );
});



//Display Data on the front side of the website
const result=document.getElementById("contactform");
result.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").Value;
    result.innerHTML='<p>Hello, ${name}! Thanks for submitting </p>';
});