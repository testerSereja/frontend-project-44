#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainPrime(username) {
  console.log(`Hello, ${username}
  Answer "yes" if given number is prime. Otherwise answer "no".`);

  function primality(num) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (base) => Math.round(Math.random() * base);
    const num = randomNumber(99);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

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

export default brainPrime;
