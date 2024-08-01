/*-------------------------------- Constants --------------------------------*/
//Step 5: Define the required constants. -Done
const winningCombos = [     // 5.a: create winningCombos const & define the 8 possible winning combos
    [0, 1, 2],  // horizontal combos
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // vertical combos
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // diagonal combos
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
//Step 1: Define the required variables used to track the state of the game. -Done
let board   
let turn 
let winner 
let tie 


/*------------------------ Cached Element References ------------------------*/
//Step 2: Store cached element references. -Done
const squareEls = document.querySelectorAll(".sqr")
// console.log(squareEls)
const messageEl = document.querySelector("#message")
// console.log(messageEl)
const squareIndex = document.querySelector(".board")    //6.c: get the idx for an id assigned to the target el in the HTML - assign this to a const called squareIndex
// console.log(squareIndex)
const resetBtnEl = document.querySelector("#reset") // 7.c:store cache element of the reset button  
console.log(resetBtnEl) 


/*-------------------------------- Functions --------------------------------*/
//Step 3: Upon loading, the game state should be initialized, and a function should be called to render this game state. -Done
function init(){       
    board =             // 3.c: set board to an arr w/ 9 empty strings
        ["", "", "", 
        "", "", "",  
        "", "", ""]
    turn = "x"      // 3.d: set turn to 'x' - will represent player 'x'
    winner = false      // 3.e set winner to false - no winner yet
    tie = false     // 3.f: set tie to false - board arr has empty strings
        
    render()    // 3.g

    //Step 7.c: Create Reset functionality
    resetBtnEl.addEventListener("click", init)
}
init()
    
//Step 4: The state of the game should be rendered to the user. -Done
function render(){      // 4.a create render function
    updateBoard()       // 4.f: invoke both updateBoard & updateMessage functions inside the render function
    updateMessage()
}
    
function updateBoard(){     // 4.b: create updateBoard function
    board.forEach((square, idx) => {    // 4.c: loop over board & for each el -> 1)use the current idx to access the corresponding square in squareEls 
        squareEls[idx].style.fontSize = "75px"      // 4.c: 2)style the square however you wish
            
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
    
function updateMessage(){       // 4.d: create updateMessage function
    // console.log("updateMessage is up")
    if(winner === false && tie === false){      // 4.e: render a msg based on the current game state -> 1)if both winner & tie = false - render whose turn it is
        messageEl.textContent = `Its ${turn}'s turn.`
        // console.log("game on")
    }else if(winner === false && tie === true){     // 4.e: 2)if winner = false & tie = true -> render a tie message
        messageEl.textContent = "The game is tied. Want to try again?"
        // console.log("gamnem is a tie")
    }else{
        messageEl.textContent = "You're a winner!"      // 4.e 3)otherwise, render congrats msg for the player who won
        // console.log("win")

    }
}

function placePiece(index){     // 6.1a: create a placePiece function that accepts an index parameter
    board[index] = turn     // 6.1b: update board arr at the index to that it is = to the current value of turn 
    // console.log(board)
    // console.log(index)
    
}

function checkForWinner(){      // 6.2a: create a checkForWinner function
        winningCombos.forEach((combo) => {
       
            if(board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
               winner = true
            }
    })
   

    console.log(winner)
}

function checkForTie(){     // 6.3a create checkForTie function
    if(winner === true){
        if(board[squareIndex] === ""){      // 6.3b: if there is a winner - return out of function
            return tie = false              // 6.3c: check if board arr contains any empty "" - if so, leave ties = flase - otherwise tie = true
        }else{
            return tie = true
        }       
 
        return
    }
    
    
    
    
    
}

function switchPlayerTurn(){    // 6.4a: create switchPlayerTurn function
    if(winner === false){       // 6.4b: if winner = true - return out of function
        if(turn === "x"){       // 6.4c: if winner = false - change the turn by checking the value of turn           
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
//Step 6: Handle a player clicking a square with a `handleClick` function.  -Done
function handleClick(event){        // 6.a: create a handleClick function          
    if(board[event.target.id] === "x" || board[event.target.id] === "o" || winner === true){    //6.d: 1)if board has 'x' or 'o' at squareIndex position -return out of handleClick 2)winner = true - return out of handleClick
        // console.log("sanity check")
        return
    }

    placePiece(event.target.id)     // 6.1c: call the placePiece function in handleClick - pass squareIndex
    checkForWinner()        //6.2c: call the checkForWinner function 
    checkForTie()       // 6.3d call the checkForTie function
    switchPlayerTurn()  // 6.4d: call the switchPlayerTurn function
    render()        // 6.5: call the render function
}

// 6.b Option 1: add an event lisenter to each exisiting squareEls w/ a loop. setup ev.listener to respong to 'click' & should call handleClick
squareEls.forEach((square) => {     
    square.addEventListener("click", handleClick)     
    }) 



    
