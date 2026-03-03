console.log("hello")
//accessin by class name 
let boxes=document.getElementsByClassName("box")
boxes[3].style.backgroundColor="red"

//accessing by the searching and finding by index of the element 
let b=document.body.childNodes
b[1].style.backgroundColor = "blue";

// accessing the element by the id 
let c=document.getElementById("idwala");
c.style.backgroundColor="green";

//queryselector
document.querySelector(".box").style.backgroundColor="black";
q=document.querySelectorAll(".box");
q.forEach(element => {
    element.style.backgroundColor="red";
});
// for(let i=0;i<4;i++){
//     q[i].style.backgroundColor="green";
// }
document.getElementsByTagName("div") //this will return the element of div in an array form 

//matches
c.matches(".box") //--> true 
c.matches("div") // --> true

//closest
c.contains(body)// -->false
body.contains(c) // --> true

//example:
// let el = document.getElementById("idwala");
// let parent = el.closest(".container");
// console.log(parent);  // returns div.container

//contains
//example:
//let container = document.querySelector(".container");
// let el = document.getElementById("idwala");
// console.log(container.contains(el)); // true