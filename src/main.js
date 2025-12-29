function getInput() {

  const userInput = require('readline');
  const reader = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.question("Please enter a message: ", value => {
    //console.log("You entered: ", value);
    //console.log(typeof value);
    getOutput(algorithm(value));
    reader.close();
  });
}

function getOutput(messageCode) {

  if (messageCode == null) {
    console.log("You didn't enter a value.")
  } else {
    //console.log("You entered: ", messageCode.toString());
  }
}

function algorithm(userInput) {
  let length = userInput.length;

  let count = 0;

  for (let i = 0; i < length; i++) {

    if (userInput[i] != ' ') {
      count += userInput.charCodeAt(i);
    }
  }

  count = ((count / length) % 26) + 1;

  return Math.floor(count);
}

const messages = {
  numberId:0,
}

getInput();
