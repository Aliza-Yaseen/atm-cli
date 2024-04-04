#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 11225;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin.",
        type: "number"
    },
])

if (pinAnswer.pin === myPin) {
    console.log("Correct the pin code!");

    let actionAns = await inquirer.prompt([
        {
            name: "action",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ])

    console.log(actionAns);

    if(actionAns.action === "Withdraw"){
        let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"

        }
        ]);

        myBalance -= amountAns.amount;

        console.log("Your Remaining Balance is:" + myBalance);
    }
}

else (
    console.log("Incorrect pin number." + myBalance)
)

