function sigmoid(x){
    let z = 1/x;
    let e = 2.71;
    let r = Math.pow(e,z);
    return(r)
};

let result = sigmoid(3)
console.log(result)