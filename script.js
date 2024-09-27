const btnClick = document.querySelectorAll("button")

const userScoreElement = document.getElementById("user-score")
const compScoreElement = document.getElementById("comp-score")
const resutlElement = document.getElementById("result")

let userScore = 0
let compScore = 0 
btnClick.forEach((btn)=>{
    btn.addEventListener("click", ()=>{      
        const result = playRound(btn.id, compChoice())
        // console.log(result);
        resutlElement.textContent = result
    })
})


function compChoice(){
    const choices = ["rock", "paper", "scissor"]

    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}

function playRound(userSelection, compSelection){
    if(userSelection == compSelection){
        return "It's a tie!"
        
    }else if(
        (userSelection == "rock" && compSelection == "scissor") ||
        (userSelection == "paper" && compSelection == "rock") ||
        (userSelection == "scissor" && compSelection == "paper")
    ){
        userScore++
        userScoreElement.textContent = userScore
        return `You won! ${userSelection} beats ${compSelection}`
    }else{
        compScore++
        compScoreElement.textContent = compScore
        return `You lose! ${compSelection} beats ${userSelection}`
    }
}