// let DATA = "secret information";

// class User {
    // constructor(name, email) {

        // this.name = name;
        // this.email = email;
    // }

    // viewData () {
        // console.log("data = ", DATA);


    // }

// }

// class Admin extends User {
    // constructor(name,email) {
        // super(name,email);
    // }

    // editData() {
        // DATA = "some new value";
    // }
// }

// let student1 = new User("raj","raj@gmail.com");
// let student2 = new User("sanjay","abc@gmail.com");


// lecture 12


// function hello() {
    // console.log("hello");

// }

// setTimeout(hello,2000)


// console.log("one");
// console.log("two");

// function raj() {

// }

// setTimeout( () => {
    // console.log("raj");
// },4000);
// 
// console.log("three");
// consol/e.log("four");





// function getData(dataId, getNextData) {
    // setTimeout( () => {
        // console.log("data",dataId);
        // if(getNextData)
        // {
            //  getNextData();
        // }
      
    // },2000);
// }

// callback hell



// getData(1, () =>{
    // getData(2, () => {
        // getData(3)
    // });
// });



// call back hell


 function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data");
            resolve("sucess");
        },4000);
    });

}


function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("some data");
            resolve("sucess");
        },4000);
    });

}

console.log("fecthing data1........");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fecthing data2..........");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});