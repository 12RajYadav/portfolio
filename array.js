const arr = [1,2,3,3,4,5];

//  push method

arr.push(6);
console.log(arr);

// pop 
// remove to last

// splice used to insert an item in array 

arr.splice(1,0,7);
console.log(arr);

// indexOf 

console.log(arr.indexOf(7));

// For Each 

arr.forEach((val)=>{
    console.log(val);
})

arr.forEach((val,idx)=>{
    console.log(val,idx);
})
// Higher Order Method
//  map , filter , reduce
//  map method return everytime a new array
const a = [ 2,3,4,5];
const sq = a.map((val)=>{
    return val**2;
})

console.log(sq);

//  filter 

const even = a.filter((val) =>{
    if(a%2==0){
        return true;
    }
    else {
        return false;
    }
})
console.log(even);

// reduce 

const sum = a.reduce((initialval,Currval)=>{
    initialval += Currval;
    return initialval+Currval;
},0)