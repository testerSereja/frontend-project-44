#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function brainGcd(username) {
  console.log(`Hello, ${username}
Find the greatest common divisor of given numbers.`);
  for (let i = 0; i < 3; i++) {
    const randomNumber = (base) => Math.round(Math.random() * base);
    const num1 = randomNumber(99);
    const num2 = randomNumber(99);
    const expression = `${num1} ${num2}`;

    function gcd(num1, num2) {
      if (!num2) {
        return num1;
      }

      return gcd(num2, num1 % num2);
    }
    console.log(`Question: ${expression}`);
    const rightAnswer = gcd(num1, num2);

    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer !== +answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
}
brainGcd(name);
