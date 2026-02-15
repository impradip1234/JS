console.log(" reduce method ")
let arr2 = [1,2,3,4,5,6];

const multiply = (accumulater, current_element) => {
    return accumulater * current_element;
};

console.log(arr2.reduce(multiply));



let add =(a, b) =>{
    return a+b;
};
console.log(arr2.reduce(add))

