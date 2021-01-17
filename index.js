// =========== Const Section ===========
const INQUIRER = require("inquirer");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
// ========== END Const ==================

// array of questions for user
console.log('meow');

// function to initialize program
function init() {
  INQUIRER.prompt([{type: 'input',message:'Enter Phone Number: ',name:'number'},{type: 'input',message:'Enter Message: ',name:'message'}])
    .then((answers) => {
        console.log(answers);
    client.messages
      .create({
        body: answers.message,
        from: `+${process.env.TWILIO_PHONE_NUMBER}`,
        to: `+${answers.number}`,
      })
      .then((message) => console.log(message));
  });
}

// function call to initialize program
init();
