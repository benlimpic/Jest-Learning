#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.yellow.bold("My pleasure!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "yellow",
 backgroundColor: ""
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);