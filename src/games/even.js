#!/usr/bin/env node
import readlineSync from 'readline-sync';

function brainEven(username) {
  console.log(`Hello, ${username}!
Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct');
    } else {
      console.log('false');
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}

export default brainEven;
