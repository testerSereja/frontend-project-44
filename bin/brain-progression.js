#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function progression(Username) {
  console.log(`Hello, ${Username}
  What number is missing in the progression?`);
  const randomNumber = (base) => Math.round(Math.random() * base);
  const num1 = randomNumber(99);
  const num2 = randomNumber(99);



}

console.log(progression(name))