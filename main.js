const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerPick;



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


const userChoices = (event) => {

  userChoice = event.target.id
  console.log(userChoice)
  let result = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase()
  userChoiceDisplay.innerHTML = result
  generateComputerChoice()
}


possibleChoices.forEach(choice => {
  choice.addEventListener('click', (userChoices))
})
