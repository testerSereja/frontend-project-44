#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function brainCalc(Username) {
  console.log(`Hello, ${Username}
    What is the result of the expression?`);
  for (let i = 0; i < 3; i++) {
    const randomNumber = (base) => Math.round(Math.random() * base);
    const operator = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * operator.length);

    const num1 = randomNumber(99);
    const num2 = randomNumber(99);
    const operation = operator[randomOperator];
    const expression = `${num1} ${operation} ${num2}`;
    const rightAnswer = eval(expression);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer !== +answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
        Let's try again,${Username}!`); 
        return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations,${Username}!`);
}
brainCalc(name);
