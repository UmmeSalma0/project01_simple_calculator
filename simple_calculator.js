#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "enter the first number", type: "number", name: "firstnumber" },
    { message: "enter the second number", type: "number", name: "secondnumber" },
    { message: "select the operation", type: "list", name: "operation", choices: ["addition", "subtraction", "multiplication", "division"] }
]);
console.log(answer);
// conditional statements
if (answer.operation === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operation === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operation === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operation === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("invalid operation");
}
;
