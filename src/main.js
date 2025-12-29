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
    readFromFile(messageCode);
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

  count = ((count / length) % 26);

  return Math.floor(count);
}

function readFromFile(messageCode) {
  const fs = require('fs');

    const messages = fs.readFileSync('messages.txt', 'utf8').split('\n').map(line => line.trim());

    console.log("Your message can be described as:", messages[messageCode]);
}

getInput();
