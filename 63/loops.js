console.log('this is for practicing loop of javascript')

let arr=[2,3,4,5,6,7,8,8,9];
//for loop 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//forEach loop
arr.forEach((value,index,array)=>{
    console.log(value,index,array);
});

//for...in loop
let object={
    a:2,
    b:3,
    c:4
}
for (const key in object) {
    // if (!Object.hasOwn(object, key)) continue;
    const element = object[key];
    console.log(key,element)
    
    
}

//for.......of loop
let arr5=[3,5,3,5,7,6,7,4,6]
for (const iterater of arr5) {
    console.log(iterater); 
}