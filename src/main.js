function getInput() {
  let userInput = "test"; //prompt('Enter a message: ', null);

  getOutput(algorithm(userInput));
}

function getOutput(messageCode) {

  if (messageCode == null) {
    console.log("You didn't enter a value.")
  } else {
    console.log("You entered: ", messageCode.toString());
  }
}

function algorithm(userInput) {
  let length = userInput.length;

  let count = 0;

  for (let i = 0; i < length; i++) {

    if (typeof userInput != 'string') {
      console.log("Invalid input: ", userInput, "\nShould be a string. \nTry again.");
      getInput();
    }


    if (userInput[i] != ' ') {
      count += userInput.charCodeAt(i);
    }
  }

  count /= length;

  count %= 26;

  return Math.floor(count);
}

const messages = {
  numberId:0,
}

getInput();
