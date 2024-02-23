let boxbtn = document.querySelectorAll(".box");

let resetbtn= document.querySelector(".reset-btn1");

let turnO = true;
boxbtn.forEach((box)=> { 
    box.addEventListener("click",()=>
    {
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText="X";
            turnO=true;
        }
    
    })
})
resetbtn.addEventListener("click", () => {
    boxbtn.forEach((box) => {
        box.innerText = "";
    });
    turnO = true; // Reset the turn to 'O'
});