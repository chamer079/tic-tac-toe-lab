/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.


/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game. -Done
let board 
let turn 
let winner 
let tie 


/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")

console.log(squareEls)
console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

function init(){       
    console.log("sanity check")
    board =
        ["x", "o", "", 
        "", "", "",  
        "", "", ""]
        turn = "x"
        winner = false
        tie = false     
        
        console.log("LOOK AT ME!!!!") //<- not showing below render()...?
        render()
    }
    
init()


function render(){
    console.log("render test")  //<- not showing below callbacks...?
    updateBoard()
    updateMessage()
}


function updateBoard(){
    board.forEach((square, idx) => {
        // square[idx].style.backgroundColor = "red"
        // square[idx].style.fontSize = "20px"
        // console.log(squareEls)
console.log(square)
        if(square === "x"){
            square[idx].textContent = "x"
            console.log("test if", square)
        }else if(square === "o"){
            square[idx].textContent = "o"
            console.log("test else if", square)
        }else{
            square[idx].textContent = ""
        }
    })
    // console.log("hi world")
}


function updateMessage(){
    if(winner === false && tie === false){
        return ("your turn")
    }else if(winner === false && tie === true){
        return("the game is a tie")
    }else{
        return("your a winner!")
    }
}
/*----------------------------- Event Listeners -----------------------------*/
//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.







