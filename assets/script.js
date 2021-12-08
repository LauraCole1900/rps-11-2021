// Need a landing page
// On page load, confirm "Do you want to play Rock, Paper, Scissors?"
// If user selects "Cancel", alert "Thanks for visiting!"
// Otherwise, prompt "Please enter 'R', 'P', or 'S'"
// Once user enters selection, validate selection
// If selection is valid, alert selection & continue
// Otherwise, prompt again until selection is valid
// Computer randomly selects R, P, or S: array with index selected by Math.random
// Compare values based on rules of RPS: conditional logic
// Alerts appropriately whether win, loss or draw
// Stores win, loss, or draw in variable
// Alerts win-loss-draw record
// Prompt to play again

// ================ //
// Global variables //
// ================ //

let playerChoice = "";
let computerChoice = "";
let win = 0;
let loss = 0;
let draw = 0;
const choices = ["R", "P", "S"]

// ========== //
// Game logic //
// ========== //

// Calls confirm method on page load & calls alert or startGame depending on user's choice
function onLoad() {
  const play = confirm("Do you want to play Rock, Paper, Scissors?")
  if (!play) {
    alert("Thanks for visiting!");
  } else {
    startGame();
  }
}

// Calls prompt, uppercases user's choice and stores it in a variable,
// then validates that choice and calls computerSelect or recursively calls self
// depending on validation 
function startGame() {
  playerChoice = prompt("Please enter 'R', 'P', or 'S'.").toUpperCase();
  if (choices.includes(playerChoice)) {
    computerSelect();
  } else {
    startGame();
  }
}

// Runs random-number generator to get index for the choices array, stores
// the character at that index as the computer's choice, then calls compareChoices
function computerSelect() {
  const choiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[choiceIndex];
  compareChoices(playerChoice, computerChoice);
}

// Compares user's choice and computer's choice based on Rock, Paper, Scissors
// rules, alerts what the choices were and who won, increments the relevant
// variable, and calls displayRecord
function compareChoices(pChoice, cChoice) {
  switch (true) {
    case pChoice === "R" && cChoice === "S":
    case pChoice === "S" && cChoice === "P":
    case pChoice === "P" && cChoice === "R":
      alert(`You chose ${pChoice}.
Computer chose ${cChoice}.
You won!`);
      ++win;
      displayRecord();
      break;
    case pChoice === "R" && cChoice === "P":
    case pChoice === "S" && cChoice === "R":
    case pChoice === "P" && cChoice === "S":
      alert(`You chose ${pChoice}.
Computer chose ${cChoice}.
Computer won!`);
      ++loss;
      displayRecord();
      break;
    default:
      alert(`You chose ${pChoice}.
Computer chose ${cChoice}.
It's a draw!`);
      ++draw;
      displayRecord();
  }
}

// Shows win-loss-draw record and confirms whether the user wants to play again,
// then calls startGame or exits depending on the user's choice
function displayRecord() {
  const playAgain = confirm(`Wins: ${win}
Losses: ${loss}
Draws: ${draw}
Play again?`);
  if (playAgain) {
    startGame();
  } else {
    alert("Thanks for playing!");
    window.open("exit.html", "Thanks for visiting!");
  }
}


// Calls initial function to run on page load
onLoad();
