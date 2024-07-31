/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

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
const squareIndex = document.querySelector(".board")


/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

function init(){       
    board =
        ["", "", "", 
        "", "", "",  
        "", "", ""]
    turn = "x"
    winner = false
    tie = false     
        
    render()
}
init()
    
    
function render(){
    updateBoard()
    updateMessage()
}
    
function updateBoard(){
    board.forEach((square, idx) => {
        squareEls[idx].style.fontSize = "75px"
            
        if(square === "x"){
            squareEls[idx].textContent = "x"
            // console.log("test if", square, idx)
        }else if(square === "o"){
            squareEls[idx].textContent = "o"
            // console.log("esle if test", square, idx)
        }else{
            squareEls[idx].textContent = ""
        }
            
    })
}
    
function updateMessage(){
    // console.log("updateMessage is up")
    if(winner === false && tie === false){
        messageEl.textContent = `Its ${turn}'s turn.`
        // console.log("loss")
    }else if(winner === false && tie === true){
        messageEl.textContent = "The game is tied. Want to try again?"
        // console.log("tie")
    }else{
        messageEl.textContent = "You're a winner!"
        // console.log("win")

    }
}

function placePiece(index){
    board[index] = turn 
    // console.log(board)
    // console.log(index)
    
}

function checkForWinner(){
    winningCombos.forEach((combo) => {
       const [a, b, c] = combo

       if(board[combo[a]] !== "" && board[combo[a]] === board[combo[b]] && board[combo[a]] === board[combo[c]]){
        return winner = true
       }else{
        return winner = false
       }
    })
    // console.log(winner)
}

function checkForTie(){
    if(board[squareIndex] === ""){
        return tie = false
    }else{
        return tie = true
    }
}

function switchPlayerTurn(){
    if(winner === false){
        if(turn === "x"){
            turn = "o"
        }else{
            turn = "x"
        }
    }else{
        return
    }
    console.log(turn)
}
    
    
/*----------------------------- Event Listeners -----------------------------*/
//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event){          
    if(board[event.target.id] === "x" || board[event.target.id] === "o" || winner === true){
        // console.log("sanity check")
        return
    }

    placePiece(event.target.id)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

squareEls.forEach((square) => {
    square.addEventListener("click", handleClick)     
    }) 


//7) Create Reset functionality.
    
