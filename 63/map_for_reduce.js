console.log("this if for better understanding of map()")

let arr=[3,5,6,8,6,7,4,32,5,7,65]
// let newarr1=[];

// for(let i=0;i<arr.length;i++){
//     newarr[i]=arr[i]*2;
// }
// console.log(newarr);

// another method called method
let newarr2=arr.map((value,index,arr)=>{
    return value*2;
})
console.log(newarr2)
