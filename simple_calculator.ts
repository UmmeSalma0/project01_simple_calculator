#! /usr/bin/env node              // shebang is used to tell the shell which interpreter to use.

import inquirer from "inquirer"; // inquirer module is used to take input from the user.
import chalk from "chalk"; // chalk module is used to add color to the output.

console.log(chalk.bgGray("Welcome to CLI_simple calculator"));

// here variable declare as answer and store the input values from the user.
const answer = await inquirer.prompt([
  {
    name: "firstnumber",
    type: "number",
    message: chalk.blueBright("Enter the first number"),
  },
  {
    name: "secondnumber",
    type: "number",
    message: chalk.redBright("Enter the second number"),
},
{
      name: "operation",
      type: "list",
      choices: ["addition", "subtraction", "multiplication", "division","modulus","power","factorial","square root","cube root","square","cube",],
      message: chalk.yellowBright("select the operation"),
  },
]);
console.log(answer.operation);

// conditional statements
if (answer.operation === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);

} else if (answer.operation === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);

} else if (answer.operation === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);

} else if (answer.operation === "division") {
  console.log(answer.firstnumber / answer.secondnumber);

} else if (answer.operation === "modulus") {
  console.log(answer.firstnumber % answer.secondnumber);

} else if (answer.operation === "power") {
  console.log(Math.pow(answer.firstnumber, answer.secondnumber));

} else if (answer.operation === "factorial") {
  let fact = 1;
  for (let i = 1; i <= answer.firstnumber; i++) {
    fact = fact * i;
  }
  console.log(fact);

} else if (answer.operation === "square root") {
  console.log(Math.sqrt(answer.firstnumber));

} else if (answer.operation === "cube root") {
  console.log(Math.cbrt(answer.firstnumber));

} else if (answer.operation === "square") {
  console.log(answer.firstnumber * answer.firstnumber);
  
} else if (answer.operation === "cube") {
  console.log(answer.firstnumber * answer.firstnumber * answer.firstnumber);
}
else {
  console.log(chalk.red("invalid operation"));
}
