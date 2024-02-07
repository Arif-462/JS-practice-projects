// @ts-nocheck
let btns = document.querySelectorAll(".btn");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("new");
let msgBtn = document.querySelector(".msg");
let WinBtn = document.querySelector(".win");

let playerO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

btns.forEach((btn)=>{
   btn.addEventListener("click", ()=>{
    if(playerO){
        btn.innerText = "X";
        playerO = false;
    }
    else{
        btn.innerText = "O";
        playerO = true;
    }
    btn.disabled = true;
    checkWiner();
   })
});

const checkWiner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1)
                showWinner(pos1);                
            }
        }
    }
};


const showWinner = (winner)=>{
    WinBtn.innerHTML = `Congratulations! -- The winner is ${winner}`;
    msgBtn.classList.remove("hide")
    btnDisable();
}

const btnDisable = ()=>{
    for(let btn of btns){
        btn.disabled = true;
    }
}

const btnEnable = ()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const resetGame =()=>{
    playerO = true;
    btnEnable();
    msgBtn.classList.add("hide");   
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);