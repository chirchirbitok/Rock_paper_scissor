var userScore = 0;
var compterScore  = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function win(userChoic, computerChoic){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoic + " beats " + computerChoic + "You Win &#128293;";
}
function lose(){
    compterScore++;
    computerScore_span.innerHTML = compterScore;
}
function draw(){
     
}

function game(userChoice){
    const compterChoice = getComputerChoice();
    switch (userChoice + compterChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , compterChoice);
            
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , compterChoice);
            
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice , compterChoice);
            
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