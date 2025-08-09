let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game drawn";
    msg.style.border = "5px solid blue";
    userScorePara.style.background = "";
    compScorePara.style.background = "";
    compScorePara.style.border = "";
    userScorePara.style.border = "";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.border = "5px solid green";
        userScore++;
        userScorePara.innerText = userScore;
        compScorePara.style.background = "";
        userScorePara.style.background = "yellow";
        compScorePara.style.border = "";
        userScorePara.style.border = "5px solid black";
    }
    else{
        msg.innerText = `You lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.border = "5px solid red";
        compScore++;
        compScorePara.innerText = compScore;
        userScorePara.style.background = "";
        compScorePara.style.background = "yellow";
        userScorePara.style.border = "";
        compScorePara.style.border = "5px solid black";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompchoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
       let userWin = true;
       if(userChoice === "Rock"){
        userWin = compChoice === "Paper" ? false : true;
       }else if (userChoice === "Paper"){
        userWin = compChoice === "Scissor" ? false : true;
       } else{
        userWin = compChoice === "Rock" ? false : true;
       }
       showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

