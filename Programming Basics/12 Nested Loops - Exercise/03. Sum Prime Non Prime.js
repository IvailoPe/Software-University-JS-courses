function main(input) {
    let index = 0;
    let checkifprime = false;
    let primeNum = 0;
    let nonPrimeNum = 0;
    while (input[index] !== 'stop') {
        checkifprime = true;
        let num = Number(input[index]);
        if (num <= 1) {
            checkifprime = false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                checkifprime = false;
                break;
            }
        }

        if (checkifprime == true) {
            if (Number(input[index]) < 0) {
                console.log(`Number is negative.`);
            } else {
                primeNum = Number(input[index]) + primeNum
            }
        }
        else if (checkifprime == false) {
            if (Number(input[index]) < 0) {
                console.log(`Number is negative.`);
            } else {
                nonPrimeNum = Number(input[index]) + nonPrimeNum
            }
        }
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}
