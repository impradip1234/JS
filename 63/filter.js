console.log("this is for hands on practice on filter in js");

// filter()
let arr = [1, 5, 3, 4, 7, 5, 6, 8, 9, 3];

let filter_func = (value) => {
    if (value > 5) {
        return true;
    }
    return false;
};

let filtered_arr = arr.filter(filter_func);

console.log(filtered_arr);
