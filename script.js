// Variables
let choices = ["Rock", "Paper" , "Scissors"];
let ComputerChoice;
let HumanChoice;
let HumanScore = 0 ;
let ComputerScore = 0 ;
let rounds = 5;


playGame(); //let's play









//function to play one round
function playRound() {
    getHumanChoice();
    ComputerChoice = getComputerChoice();
    ScoreBoard();
}

// function to play one game
function playGame() {
    for(i = 0 ; i < rounds ; i++){
        playRound();
    }
}


// function randomly generates a choice for the computer 
function getComputerChoice() {
    let random_n = 3 * Math.random();
    random_n = Math.floor(random_n);


    return(choices[random_n]);
}

// function prompts human to input value
function getHumanChoice(){

    HumanChoice = prompt(choices + " ? ");
    

    if ( validateHumanChoice(HumanChoice) == true){
        return;
    }

    else {
    alert("Please choose between " + choices);
    getHumanChoice();
    }

}

//function to validate human's choice
function validateHumanChoice(choice){
    if (choices.includes(HumanChoice)) {
        return(true);
    }
}

//function to check winner and increment score
function CheckWinner(computer_choice,human_choice){
    if(computer_choice == human_choice){
        return("Tie")
    }
    else if(computer_choice == "Rocks"){
        if(human_choice == "Paper"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }
    else if(computer_choice == "Paper"){
        if(human_choice == "Scissors"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }
    else if(computer_choice == "Scissors"){
        if(human_choice == "Rock"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }
}

//function to print what happens in the game
function ScoreBoard(){
    console.log(""); //empty lines for readability
    console.log("");
    console.log("");
    console.log("");
    console.log("Human chooses "+ HumanChoice);
    console.log("Computer chooses " + ComputerChoice);
    console.log(CheckWinner(ComputerChoice,HumanChoice));
    console.log("|||||||||||||||||||||||||||||||||||||");
    console.log("Human : " + HumanScore + " | Computer : " + ComputerScore );
    console.log("|||||||||||||||||||||||||||||||||||||");
}