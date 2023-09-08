function main(input) {

    let a = Number(input[0])
    let b = Number(input[1])
    let c = input[2]

    let result
    let checknumber

    switch (c) {
        case '+':
            result = a + b;
            if (result % 2 === 0) {
                checknumber = 'even'
            } else {
                checknumber = 'odd'
            };
            console.log(`${a} + ${b} = ${result} - ${checknumber}`);
            break;
        case '/':
            result = a / b;
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                console.log(`${a} / ${b} = ${result.toFixed(2)}`);
            }
            break;
        case '-':
            result = a - b;
            if (result % 2 === 0) {
                checknumber = 'even'
            } else {
                checknumber = 'odd'
            };
            console.log(`${a} - ${b} = ${result} - ${checknumber}`);
            break;
        case '*':
            result = a * b;
            if (result % 2 === 0) {
                checknumber = 'even'
            } else {
                checknumber = 'odd'
            };
            console.log(`${a} * ${b} = ${result} - ${checknumber}`);
            break;
        case '%':
            result = a % b;
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                console.log(`${a} % ${b} = ${result}`);
            }
            break;
    }
}