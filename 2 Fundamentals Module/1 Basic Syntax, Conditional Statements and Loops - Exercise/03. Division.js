function main(number) {
    for (let i = 10; i > 0; i--) {
        if (i == 9 || i == 8 || i == 1 || i == 5 || i == 4) {
            continue;
        }
        else {
            if (number % i == 0) {
                return console.log(`The number is divisible by ${i}`);
            }
        }
    }
    return console.log("Not divisible");
}