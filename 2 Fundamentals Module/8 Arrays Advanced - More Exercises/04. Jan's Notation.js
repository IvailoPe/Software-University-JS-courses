function main(operations) {
    let numbers = 0;
    let strings = 0;
    for (let i = 0; i < operations.length; i++) {
        if (typeof (operations[i]) === "number") {
            numbers++;
        }
        else {
            strings++;
        }
    }
    if (strings === numbers || strings > numbers) {
        console.log(`Error: not enough operands!`);
        return
    }
    if (numbers - strings !== 1) {
        console.log(`Error: too many operands!`);
        return
    }
    let buff = 0;
    let i = 0;
    while (true) {
        if (operations[i] == '+') {
            buff = operations[i - 2] + operations[i - 1]
            operations.splice(i - 2, 3);
            operations.splice(i - 2, 0, buff)
            i = 0
        }
        else if (operations[i] == '*') {
            buff = operations[i - 2] * operations[i - 1]
            operations.splice(i - 2, 3);
            operations.splice(i - 2, 0, buff)
            i = 0
        }
        else if (operations[i] == '/') {
            buff = operations[i - 2] / operations[i - 1]
            operations.splice(i - 2, 3);
            operations.splice(i - 2, 0, buff)
            i = 0
        }
        else if (operations[i] == '-') {
            buff = operations[i - 2] - operations[i - 1]
            operations.splice(i - 2, 3);
            operations.splice(i - 2, 0, buff)
            i = 0
        }
        if (operations.length === 1) {
            break;
        }
        i++;
    }
    console.log(operations.join(" "));
} 