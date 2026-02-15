console.log("do understand arrays clearly");

//initialization of arr:--->
let arr=[20,"pradip",null,true];
//printing arr
console.log(arr)

//accessing index wise
console.log (arr[0]);
console.log(arr[2]);
console.log("length of the is: ", arr.length);

//updation of the value at particular index
arr[0]="yadav";
console.log(arr)

//methods ===> array
let arr2=[3,5,6,2,6,4,6,4,6]
// 1.toString --> convert it to string
    console.log(arr2.toString())

    // 2. join() 
    console.log(arr2.join(" and "))

    //3. pop()
    console.log(arr2.pop())
    //4. push()
    console.log(arr2.push(12))
    //5. unshift()
    console.log(arr2.unshift(23))
    //6. shiift()
    console.log(arr2.shift())
    // //7. delete()  // not defined for arrays 
    // console.log(arr2.delete(2))
    //8. concat()
    let arr3={};
    console.log(arr3.concat(arr,arr2))
    //9. sort()
    console.log(arr3.sort())
    //10. splice(position to add, number of element to remove , elements to be added )
    console.log(arr2.splice(3,1,333))
    //11. slice()
    console.log(arr.slice(3,5))
    //12reverse()
    console.log(arr.reverse())