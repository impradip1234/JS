console.log("js is working and linked successfully")
// let boxes=document.getElementsByClassName("box");
// console.log(boxes);//print the array of boxes....
// //this will provide the each box seperately
// Array.from(boxes).forEach(element => {
//     console.log(element)
// });
// let boxes=document.querySelector(".container").children

// //function for random color.........
// function randomcolor(){
//     val1=Math.ceil(0+Math.random()*(255-0));
//     val2=Math.ceil(0+Math.random()*(255-0));
//     val3=Math.ceil(0+Math.random()*(255-0));
//     return `rgb(${val1},${val2},${val3})`
// }
// Array.from(boxes).forEach(element=>{
//     element.style.backgroundColor=randomcolor();
//     element.color=randomcolor();
// });

// method : 2 using hex color code 
let boxes = document.querySelector(".container").children;

function randomHexColor(){
    color="#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = randomHexColor();
    element.style.color = randomHexColor();
});