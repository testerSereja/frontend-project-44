#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

function brainGcd(Username){
    console.log(`Hello, ${Username}
Find the greatest common divisor of given numbers.`)

const randomNumber = (base) => Math.round(Math.random() * base);
const num1 = randomNumber(99);
const num2 = randomNumber(99);
const expression = `${num1} ${num2}`

for (let i = 0; i < 3; i++){
function gcd(num1, num2) {
    if (!num2) {
      return num1;
    }
  
    return gcd(num2, num1 % num2);
  }
  console.log(`Question:${expression}`);
  const rightAnswer = gcd(num1, num2);
  console.log(gcd(num1, num2))
  const answer = readlineSync.question('Your answer: ');
console.log(rightAnswer,answer)
  if (rightAnswer !== +answer) {
     console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again,${Username}!`); 
      return;
    }
    console.log('Correct!');
}
console.log(`Congratulations,${Username}!`);
}
brainGcd(name)