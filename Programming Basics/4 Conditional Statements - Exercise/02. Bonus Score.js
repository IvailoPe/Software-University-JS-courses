function main(input) {
    let num = Number(input[0]);
    let bonus = 0.0;
    if (num <= 100) {
        bonus = 5.0;
    }
    else if (num > 100 && num < 1000) {
        bonus = num * 0.20;
    }
    else if (num > 1000) {
        bonus = num * 0.10;
    }

    if (num % 2 == 0) {
        bonus += 1;
    }
    if (num % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(num + bonus);
}