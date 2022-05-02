const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const gameResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerPick;
let results;



const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  if (randomNumber === 1) {
    computerPick = 'rock'
  }
  if (randomNumber === 2) {
    computerPick = 'scissors'
  }
  if (randomNumber === 3) {
    computerPick = 'paper'
  }
  console.log(randomNumber)
  let result = computerPick[0].toUpperCase() + computerPick.slice(1).toLowerCase()
  computerChoice.innerHTML = result
}

const getResult = () => {
  if (computerPick === userChoice) {
    results = "It's a Tie"
  }
  if (computerPick === 'rock' && userChoice === 'paper') {
    results = "User Wins"
  }
  if (computerPick === 'rock' && userChoice === 'scissors') {
    results = "Computer Wins"
  }
  if (computerPick === 'paper' && userChoice === 'scissors') {
    results = "User Wins"
  }
  if (computerPick === 'paper' && userChoice === 'rock') {
    results = "Computer Wins"
  }
  if (computerPick === 'scissors' && userChoice === 'rock') {
    results = "User Wins"
  }
  if (computerPick === 'scissors' && userChoice === 'paper') {
    results = "Computer Wins"
  }
  gameResult.innerHTML = results
}

const userChoices = (event) => {

  userChoice = event.target.id
  console.log(userChoice)
  let result = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase()
  userChoiceDisplay.innerHTML = result
  generateComputerChoice()
  getResult()
}


possibleChoices.forEach(choice => {
  choice.addEventListener('click', (userChoices))
})
