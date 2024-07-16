let boxes = document.querySelectorAll(".box");
 let resetBtn = document.querySelector("#reset-btn");
 let masConatiner = document.querySelector(".mas-conatiner");
 let newBtn = document.querySelector(".btn")
 

 let turn0 = true; //playerX,player0

 const winPatterns = [

     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],


];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    masConatiner.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
         console.log("box was clicked");
        if(turn0) {
           box.innerText = "0";
           turn0 = false;   
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;


        checkWinner();
     });

 });

 const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }

 };

 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

 };

 const showWinner = (winner) => {
    mas.innerText = 'Congrulation, Winner is ${winner}';
    masConatiner.classList.remove("hide");
    disableBoxes();
 };


  const checkWinner = () => {
     for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
            // boxes[pattern[1]].innerText,
            // boxes[pattern[2]].innerText);

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {

                if(pos1Val === pos2Val && pos2Val === pos3Val) {

               
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }

            }
     }

  };

  newBtn.addEventListener("click", reset);
  resetBtn.addEventListener("click",btn);


