#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currencyValue = {
    // BASE CURRENCY 
    PKR: 277.95,
    UAE: 3.67,
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    AED: 0.013
};
console.log(chalk.magentaBright.bold("\n\t\tWelcome To Currency Converter Project"));
let qno = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: chalk.greenBright.bold("\nConvert Currency From : "),
        choices: ["PKR", 'UAE', 'USD', 'EUR', 'GBP', 'INR']
    },
    { type: "list",
        name: "to",
        message: chalk.greenBright.bold("\nConvert Currency To : "),
        choices: ["PKR", 'UAE', 'USD', 'EUR', 'GBP', 'INR'] },
    {
        type: "number",
        name: "number",
        message: chalk.greenBright.bold("\nEnter your amount : "),
    }
]);
let answer = currencyValue[qno.to] / currencyValue[qno.from] * qno.number;
console.log(chalk.cyanBright(`Your Currency Change from `) + chalk.yellow.bold(`${qno.from}`) + chalk.cyanBright(" to ") + chalk.yellow.bold(`${qno.to}`) + " is " + chalk.yellow.bold(`${answer}`));
