const process = require('process');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

function main() {
    const args = process.argv.slice(2);
    const operation = args[0];
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);

    switch(operation) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            try {
                console.log(divide(num1, num2));
            } catch (error) {
                console.error(error.message);
            }
            break;
        default:
            console.error('Unsupported operation. Use add, subtract, multiply, or divide.');
    }
}

main();
