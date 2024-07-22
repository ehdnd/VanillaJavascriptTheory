const randomNumberGameForm = document.querySelector("#random_number_game");
const numberLimmitInput = document.querySelector("#number_limit_input");
const numberGuessInput = document.querySelector("#number_guess_input");

function handleSubmit(event) {
  event.preventDefault();
  const numberLimit = parseInt(numberLimmitInput.value);
  const numberGuess = parseInt(numberGuessInput.value);
  const machineChosenNumber = Math.floor(Math.random() * (numberLimit + 1));

  const div = document.querySelector("#gameResult");
  const divChoseResult = document.querySelector("#gameResult div:first-child");
  const divGameResult = document.querySelector("#gameResult b");

  divChoseResult.innerText = `You chose: ${numberGuess}, the machine chose: ${machineChosenNumber}`;

  if (numberGuess === machineChosenNumber) {
    divGameResult.innerText = "You Win 🎉";
  } else {
    divGameResult.innerText = "You Lost 🥲";
  }
}

randomNumberGameForm.addEventListener("submit", handleSubmit);
