#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function brainProgression(username) {
  console.log(`Hello, ${username}
What number is missing in the progression?`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = (base) => Math.round(Math.random() * base);
    const step = randomNumber(10);
    const startNumber = randomNumber(100);
    const Array = [startNumber];
    for (let j = 0; j < 9; j += 1) {
      Array.push(Array[Array.length - 1] + step);
    }

    const index = Math.floor(Math.random() * (Array.length - 1));
    const answer = Array[index];
    Array.splice(index, 1, '..');
    console.log(Array);
    console.log(`Question: ${Array.join(' ')}`);
    const plaveranswer = readlineSync.question('Your answer: ');
    if (answer !== +plaveranswer) {
      console.log(`${plaveranswer} is wrong answer ;(. Correct answer was ${answer}.
Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
}

console.log(brainProgression(name));
