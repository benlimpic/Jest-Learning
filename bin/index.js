#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.green.bold("Hey There! Wow, you look nice today!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: ""
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);