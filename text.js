//Data Type//

"use strict"; //treat all js code as never version

//alert(3+3) // we are usng node js ,not browser

console.log(3+3)
console.log(4+6)


let name = "raj"
let age =18
let isloggedIn = false
let state;

// number =>2 to power 53
//bigint 
//string =>""
//boolean=>true/false

//object//

console.log(typeof age);
console.log(typeof undefined);
console.log(typeof null);

//06//

let score = null
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score )

//console.log(typeof valueInNumber);//
//console.log(valueInNumber);

//"33"  => 33
//"33abc"  =>  NaN
//true  =>  1;  false ==>0;


let someNumber=33
let stringNumber=Number(someNumber)
//console.log(stringNumber);
//console.log(typeof "stringNumber");//


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true; 0 => false ;
// "" => false
// "raj" => true
 

//Arrays //


let marks = [23,45,57,5,67]
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[0]);



//array loop//

let Name = ["sanjay","Raj","sumit","manju"];
for(let i = 0; i<Name.length; i++)
{
    console.log(Name[i]);
}

//for of loop//

let cities = ["delhi","pune","punjab","haryana"];

for(let city of cities){
    console.log(city.toUpperCase());
}
