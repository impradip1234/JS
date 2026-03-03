// let n=5;
// let fact=1;
// for(let i=n;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact);

//method 2;
let a=6;
function factorial(number){
    let arr=Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
factorial(a);