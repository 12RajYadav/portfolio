let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
 console.log("btn1 was clicked");
     let a = 25;
     a++;
     console.log(a);
 }

 btn1.addEventListener("click", () => {
     console.log("button waas clicked2");

 });



let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});


