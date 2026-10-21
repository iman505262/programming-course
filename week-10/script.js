console.log("linked")

//Dom and basic manipulation
//what is the dom?
//doucument object modle, this is how the browser represents your web page in memery
//HTMl element becomes as js object that we can acces,change or delete
//js to change text, image, colors, classes,ect. this occure after the web page fully loads

//change text content with js
//we are going to find the HTML element via its ID attribute

const title=document.getElementById("title");
//documents represent the web page  laoded in the browser

//. getelementID("title"), fine the element in the html with exact id
//const, means that the variable reference wont change
//it will always dpoint to the same DOM element 

title.textContent="welcome to my webpage!"

//.tetxcontent accesses or change the text inside the element


//Selecting elemnts
//getelementby ID, selects one element by its ID   document.getElementbyID("Tilte")

//queryselector, selects the first match (Id,class,tag).  document.queryselector(".main")

//queryselectorALl(), returns nodelist of all matches.   document.queryselecttorAll("p")


//Queryselector
const mainselectoion=document.querySelector(".main");
mainselectoion.computedStyleMap.backroundcolor="red";

//QueryselectorAll

const paragraphs=document.querySelectorAll("P");

//loop through all p element and change thier text

paragraphs.forEach((para, index)=> {
    para.textContent= 'paragraph $(index + 1)modified by querySelectorAll()';
    para.style.color = "blue";
});




//assing interactivety with event listeners

const button=document.getElementById("toggle");
//listen for a button click
button.addEventListener("click",() =>{
    //toggle the highlight class on the body

    document.body.classList.toggle("highlight");




});










