 function add (a,b){
    return a+b;
 }

 console.log(add(5,6));

 const multiple = function(a,b){

    return a*b;
 }
 console.log( typeof multiple);

//  arrow function

const div = (a,b) => {
    console.log(a/b);
}
 console.log(div(5,2));

//   Callback Function

function add(a,b,greet){
    greet();
    return a+b;
}

function greet () {
    console.log("good mornig");
}
ans = add(10+133);


function outerFunction () {
    console.log("outer function");
    return function () {
        console.log("inner function");
    }
}

outerFunction();

