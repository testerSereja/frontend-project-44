#!/usr/bin/env node
import name from '../src/cli.js';
import readlineSync from 'readline-sync';

function brainEven(Username) {
    
console.log(`Hello, ${Username}!
Answer "yes" if the number is even, otherwise answer "no".`)
for(let i = 0; i < 3; i++){
    let randomNumber = Math.ceil(Math.random()*100)
console.log(`Question: ${randomNumber}`);
const answer = readlineSync.question(`Your answer: `)

if(randomNumber % 2 === 0 && answer ==='yes'){
    console.log('Correct!')
}else if (randomNumber % 2 !==0&& answer === 'no'){
    console.log('Correct') 
}else {
    console.log('false') 
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
    Let's try again, ${Username}`)
}

}
console.log(`Congratulations,${Username}!`)
 };

brainEven(name)