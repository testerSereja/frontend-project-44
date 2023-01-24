#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function brainPrime(username) {
  console.log(`Hello, ${username}
  Answer "yes" if given number is prime. Otherwise answer "no".`);

  for (let i = 0; i < 3; i++) {
    const randomNumber = (base) => Math.round(Math.random() * base);
    const num = randomNumber(99);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    function primality(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    const rightAnswer = primality(num) ? 'yes' : 'no';
    console.log(rightAnswer);
    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
   Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
}

brainPrime(name);
