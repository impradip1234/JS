alert('faulty calculater')
let random=Math.random();
let a=prompt('enter you first number');
let b=prompt('enter the operation symbol');
let c=prompt('enter the secont number');

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if(random>0.1){
    //perform correct calculation
    alert(`The result is: ${eval(`${a} ${b} ${c}`)}`);
    

}
else{
    b=obj[b]
    //perfom incorrect calculation
    alert(`The result is: ${eval(`${a} ${b} ${c}`)}`);
}
