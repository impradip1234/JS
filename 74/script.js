console.log('hello')

//mouse events
let button=document.getElementById("btn");
// button.addEventListener("click",()=>{
//     alert('bhak marde')
// })

// button.addEventListener("click",()=>{
//     document.querySelector(".container").innerHTML="Yes button , clicked";
// })
// button.addEventListener("mouseover",()=>{
//     document.querySelector(".container").innerHTML="Yes button , double clicked";
// })
// button.addEventListener("mouseleave",()=>{
//     document.querySelector(".container").innerHTML="cursor hata lihala ";
// })

//keyboard events
//only works if clicked on button
// button.addEventListener("keydown",(e)=>{
//     console.log(e,e.key,e.keyCode);
// })
// // works always
// document.addEventListener("keydown",(e)=>{
//     console.log(e.key,e.keyCode);
// })

// for Event Bubbling 
// let button2=document.querySelector(".dabba");
// button2.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     alert('chain naikhe mane,dabba')
// })
// let button3=document.querySelector(".badadabba");
// button3.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     alert('chain naikhe mane,badadabba')
// })
// let button4=document.querySelector(".sabsebada");
// button4.addEventListener("click",(e)=>{
//     alert('chain naikhe mane,sabsebada')
// })

//event.remove()
// button4.removeEventListener("click",(e)=>{
//     alert('chain naikhe mane,sabsebada')
// })
function randomcolor(){
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   return `rgb(${r},${g},${b})`;
}

// for setInterval 
// let a=setInterval(()=>{
//     console.log(randomcolor());
//     document.body.style.background = randomcolor();
// },1);
// console.log(a)  //for removing the setInterval : clearInterval(a)

//for timeOut
let a=setTimeout(()=>{
    console.log(randomcolor());
    document.body.style.background = randomcolor();
},3000);
console.log(a)  //for removing the setInterval : clearTimeOut(a);