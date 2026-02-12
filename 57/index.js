// loops 

//for --> default --used for doing a repeatative work in
for(let i=1;i<=5;i++){
    console.log(i);
}

// for in loop -- used for looping through the key of the object 
let obj={
    name: "pradip", 
    class:"b.tech CSE",
    passion:"programming"

}
for(const key in obj){
    console.log(key);
}

//for of loop --->used for visiting each characters of a string 
for(let key of "pradip"){
    console.log(key)
}

//while loop 
let a=1
while(a<=5){
    console.log(a);
    a++ 
}

//do while loop --> executes at least once
let b=0;
do {
    b++;
    console.log(b);
}while(b<5);