/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.


/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game. -Done
let borad 
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
    borad =
    ["x", "o", "", 
     "", "", "",  
     "", "", ""]
    turn = "x"
    winner = false
    tie = false     

    render()
}
console.log("init() test", init)
init


function render(){
    updateBoard()
    updateMessage()
}
console.log("render() test", render())


function updateBoard(){
    squareEls.forEach((square) => {
        square.style.background = "red"
        square.style.fontSize = "20px"
        console.log(squareEls)
    })
}
console.log("updateBoard() test", updateBoard())


function updateMessage(){
    if(winner === false && tie === false){
        return ("your turn")
    }else if(winner === false && tie === true){
        return("the game is a tie")
    }else{
        return("your a winner!")
    }
}
console.log("updateMessage() test", updateMessage())    
/*----------------------------- Event Listeners -----------------------------*/
//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.







