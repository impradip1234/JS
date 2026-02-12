console.log("hello what do you want to learn.")

// var ---> used to declare variable globaly and can be updated and re-declared
var a=5;
var b=4;
a=a+8;
var a=7;
console.log(a+b);


//let --->used for declaring variable within the scope---> can be updated but can not be re-declared
if(a==7){
    let c=10;
    c=c+10 // updation is ok
    // let c=20;//this will give error ---> re-declaration is not allowed
    console.log(a+c);
}
// console.log(c);  //--> this shows that c is not defined so can't be accesed as the c is defined for the block itself only

//const--> cant be updated , re-declared ,blocked scoped
const z=4;
// z=z+4; // this will give error ---> updation is not possible 
// const z=5; // re-declaration is not possible 
if (z!=0){
    const x=4;
    console.log ( x);
}
// console.log(x) // this line will show erro because the const is not declared globly


// declaring number and string 
var g=49;
var h="hello";
var y='a';// this will be a string we do not declare a charater like c or c++ but we can access the character of the string with there string 
console.log( g , h, y)
console.log(h[3])// accessing the character of the string but the word will be typeof string only

// typeof
console.log(typeof g, typeof h,typeof y, typeof h[3]);


//data types 
var r="Pradip Yadav";
var s=44;
var t=33.5;
const m=null;
let j=undefined;
let l=true;
console.log (typeof r, typeof s, typeof t, typeof m, typeof j, typeof l);

// object
let obj = {
    name: "Pradip Yadav",
    Roll: 2438317
};

console.log(obj);

obj.salary = 23456;

console.log(obj);
