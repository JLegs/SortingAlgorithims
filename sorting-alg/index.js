
const readline = require('readline');
const bubbleSort = require('./sort');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by space: ', (input) => {
    const numbers = input.split(' ').map(Number);
    const sortedNumbers = bubbleSort(numbers);
    console.log('Sorted numbers:', sortedNumbers);
    rl.close();
});
