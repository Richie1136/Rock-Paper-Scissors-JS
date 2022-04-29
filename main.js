const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice;

const userChoices = (event) => {
  userChoice = event.target.id
  userChoiceDisplay.innerHTML = userChoice
}


possibleChoices.forEach(choice => {
  choice.addEventListener('click', (userChoices))
})