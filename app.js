var userScore = 0;
var compterScore  = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function converToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoic, computerChoic){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(userChoic)} ${smallUserWord}   beats  ${converToWord(computerChoic)}  ${smallCompWord}   You Win &#128293`;
}
function lose(userChoic, computerChoic){
    compterScore++;
    computerScore_span.innerHTML = compterScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(computerChoic)} ${smallUserWord} beats  ${converToWord(userChoic)} ${smallCompWord}  You Lose &#128555 `;
}
function draw(userChoic, computerChoic){
     
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