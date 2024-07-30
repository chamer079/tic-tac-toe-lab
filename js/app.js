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
console.log(winningCombos)

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
const squareIndex= document.querySelector(".board")
console.log(squareIndex)
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

function init(){       
    // console.log("sanity check")
    board =
        ["x", "o", "", 
        "", "", "",  
        "", "", ""]
        console.log(board)
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
            squareEls[idx].addEventListener("click", (handleClick) => {
                console.log(squareEls[idx], "was clicked")

                if(squareEls[idx] === "x" || squareEls[idx] === "o"){
                    return squareEls[idx].disabled === true
                }
            })
                        
            if(square === "x"){
                squareEls[idx].textContent = "x"
                console.log("test if", square, idx)
            }else if(square === "o"){
                squareEls[idx].textContent = "o"
                console.log("esle if test", square, idx)
            }else{
                squareEls[idx].textContent = ""
            }
            
        })
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
 function handleClick(event){
 
    
}



handleClick()
// console.log(handleClick)
//7) Create Reset functionality.







