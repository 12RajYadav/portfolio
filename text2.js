// question solve//

/*let marks = [78,99,68,79,80];

let sum = 0;

for(let val of marks){
    sum += val;
}
console.log(sum);

let avg = sum / marks.length ;
console.log( avg);


//function//



// Fuction Question //

function countVowels(str) {

    let count = 0;

    for(const char of str)
    {
       
        console.log(char);
        if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }

    return count;
}

const countVow = (str) => {
    let count = 0;

    for(const char of str)
    {
       
        console.log(char);
        if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }

    return count;

}
console.log("absd");


// object 

let obj = {
    name: "raj yadav",
    roll: 23,
    fnc:function myfunc(number) {
        console.log("hello raj i am here");
    }
}
console.log(obj);*/

// let btn = document.querySelector(".raj");
// let btn1 =document.querySelector(".sub");

// let btn2 =document.querySelector(".sub1");

// btn.addEventListener("click", ()=>{
    // console.log("hello i am raj");

// })

// btn1.addEventListener("click",()=>{
    // console.log("Congrulations Your From is submited");
// })
// btn2.addEventListener("click",()=>{
    // console.log("your from is not submited");
// })


let a = 1+4;
console.log(a);

let arr = 2 + '4';
console.log(arr);

let arr1 = 2+'3'+7;
console.log(typeof arr1);

// for(let i =0; i<=1000;i++)
// {
    // console.log("sorry");
// }

let raj = 1+'3'-10;
console.log(raj);



str = " coding blocks";
// substr

console.log(str.substr(0,7));

// substring

console.log(str.substring(0,7));

// indexof
//  tell me how many numbers after choosing digit yourself

console.log(str.indexOf('b'));

// includes 
// true or false persent digit following code

console.log(str.includes('b'));

// trim 
// to rmove space

// console.log(s.trim());

//  split
// break array bassed on space 

console.log(str.split(""));

// toUpperCase , toLowerCase

console.log(str.toUpperCase());

// replace 

console.log(str.replace("coding", "Hacker"));

//  replace all 'o'


//  find  all unique char 
 const freq = {};
 for(let i = 0; i<str.length;i++)
 {
    if(freq[str[i]] == undefined){
        freq[str[i]]==1;
    }
    else {
        freq[str[i]]++;
    }
 }

for(let key in freq)
{
    if(freq[key] == 1){
        console.log(key);
    }
}

