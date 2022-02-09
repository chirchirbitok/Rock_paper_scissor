const userScore = 0;
const compterScore  = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function game(userChoice){
    const compterChoice = getComputerChoice();
    switch (userChoice + compterChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("YOU HAVE WON");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("YOU HAVE LOST.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("ITS A DRAW.");
            break;
                
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}


main();