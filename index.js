#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondtnumber" },
    { message: "select one of the operator to perform an operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondtnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondtnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondtnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondtnumber);
}
else
    ("please select valid operator");
