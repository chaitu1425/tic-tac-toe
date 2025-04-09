let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");
let turno=true;



const patterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}  

boxes.forEach(box => {
    box.addEventListener("click",(eve)=>{
        if(turno){
            box.innerText = "O";
            turno=false;
        }else{
            box.innerText = "X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
});

const disablesboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""; 
    }
};
const showwinner = (winner)=>{
    msg.innerText = 'congratulations,winner is ' + winner;
    msgcontainer.classList.remove("hide");
    disablesboxes();
};

const checkwinner = ()=>{
    for(let pattern of patterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2=== pos3){
                showwinner(pos1);
            }
        }
    }
};


resetbtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
