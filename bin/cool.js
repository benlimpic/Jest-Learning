#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.red.bold("Really cool! You COOL cool person you!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "red",
 backgroundColor: ""
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);