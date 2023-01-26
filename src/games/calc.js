#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

function brainCalc(username) {
  console.log(`Hello, ${username}
    What is the result of the expression?`);
  for (let i = 0; i < 3; i += 1) {
    const operator = ['+', '-', '*'];
    const randomOperator = operator[Math.floor(Math.random() * operator.length)];
    const num1 = randomNumber(99);
    const num2 = randomNumber(99);

    const expression = `${num1} ${randomOperator} ${num2}`;
    let rightanswer;

    if (randomOperator === '+') {
      rightanswer = num1 + num2;
    } else if (randomOperator === '-') {
      rightanswer = num1 - num2;
    } else if (randomOperator === '*') {
      rightanswer = num1 * num2;
    }
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightanswer !== +answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightanswer}.
Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
}
export default brainCalc;
