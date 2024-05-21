// Step 1: Greet the user by name
let userName = prompt("What's your name?");

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Step 2: Prompt the user to ask a question
let userQuestion = prompt(
  "What question do you want to ask the Magic Eight Ball?"
);
console.log(`${userName ? userName : "User"} asks: ${userQuestion}`);
// Step 3: Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Step 4: Use control flow to determine the eightBall's response
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Error";
    break;
}

// Output the eightBall's response
console.log(`The Magic Eight Ball says: ${eightBall}`);
