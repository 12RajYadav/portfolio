const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const butn = document.querySelector("#butn");




const getFacts = async () => {
    console.log("getting data 1.......");
    let response = await fetch(URL);
    console.log(response);
    let data= await response.json();
    factPara.innerText = data[1].text;

};

butn.addEventListener("click", getFacts);