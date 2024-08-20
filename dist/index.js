#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// taking user name
const userName = await inquirer.prompt({
    name: "uName",
    type: "input",
    message: "Enter Your Name:"
});
const quizAns = await inquirer.prompt([
    // Question 01
    {
        name: "quiz1",
        type: "list",
        message: "Question: Which of the following is a valid way to declare a variable with a specific type in TypeScript?",
        choices: [
            `A) let name: String = "John";`,
            `B) let name: string = "John";`,
            `C) let name = string("John");`,
            `D) let name: "John" = string;`
        ]
    },
    // Question 02
    {
        name: "quiz2",
        type: "list",
        message: "Question: How do you define an interface in TypeScript?",
        choices: [
            `A) interface Person { name: string, age: number }`,
            `B) type Person = { name: string, age: number }`,
            `C) function Person(name: string, age: number): void`,
            `D) class Person { name: string; age: number; }`
        ]
    },
    // Question 03
    {
        name: "quiz3",
        type: "list",
        message: "Question: What is the correct syntax to create a generic function in TypeScript?",
        choices: [
            `A) function identity<T>(arg: T): T { return arg; }`,
            `B) function identity(arg: T): T { return arg; }`,
            `C) function identity<T>(arg: T) { return arg; }`,
            `D) function identity<T, U>(arg: T): T { return arg; }`
        ]
    },
    // Question 04
    {
        name: "quiz4",
        type: "list",
        message: "Question: How do you declare an array of numbers in TypeScript?",
        choices: [
            `A) let nums: number[];`,
            `B) let nums: [number];`,
            `C) let nums: num[];`,
            `D) let nums: array of number;`
        ]
    },
    // Question 05
    {
        name: "quiz5",
        type: "list",
        message: "Question: How do you declare a variable with a specific type in TypeScript?",
        choices: [
            `A) let name: String`,
            `B) let name: string`,
            `C) let name: str`,
            `D) let name: txt`
        ]
    },
]);
// Declare variable to count the user score!
let score = 0;
// QUIZ 01
switch (quizAns.quiz1) {
    case "B) let name: string = 'John';":
        console.log(chalk.green.bold(`Answer Correct!`));
        ++score;
        break;
    default:
        console.log(chalk.red.bold(`Answer Incorrect!`));
        break;
}
// QUIZ 02
switch (quizAns.quiz2) {
    case "A) interface Person { name: string, age: number }":
        console.log(chalk.green.bold(`Answer Correct!`));
        ++score;
        break;
    default:
        console.log(chalk.red.bold(`Answer Incorrect!`));
        break;
}
// QUIZ 03
switch (quizAns.quiz3) {
    case "A) function identity<T>(arg: T): T { return arg; }":
        console.log(chalk.green.bold(`Answer Correct!`));
        ++score;
        break;
    default:
        console.log(chalk.red.bold(`Answer Incorrect!`));
        break;
}
// QUIZ 04
switch (quizAns.quiz4) {
    case "A) let nums: number[];":
        console.log(chalk.green.bold(`Answer Correct!`));
        ++score;
        break;
    default:
        console.log(chalk.red.bold(`Answer Incorrect!`));
        break;
}
// QUIZ 05
switch (quizAns.quiz5) {
    case "B) let name: string":
        console.log(chalk.green.bold(`Answer Correct!`));
        ++score;
        break;
    default:
        console.log(chalk.red.bold(`Answer Incorrect!`));
        break;
}
console.log(chalk.yellow(`SCORE: ${score}`));
// Pass or fail
if (score <= 2) {
    console.log(chalk.red.bold(`${userName.uName} You are failed!`));
}
else {
    console.log(chalk.green.bold(`${userName.uName} congratulations! You are pass`));
}
