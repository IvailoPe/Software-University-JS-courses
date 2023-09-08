function main(input) {
    let c = input[0]
    let a = Number(input[1])

    let b = 0;

    if (c === 'Sofia') {
        if (a >= 0 && a <= 500) {

            b = a * 0.05
            console.log(b.toFixed(2));
        }
        else if (a > 500 && a <= 1000) {
            b = a * 0.07
            console.log(b.toFixed(2));
        }
        else if (a > 1000 && a <= 10000) {
            b = a * 0.08
            console.log(b.toFixed(2));
        }
        else if (a >= 10000) {
            b = a * 0.12
            console.log(b.toFixed(2));
        } else {
            console.log(`error`);
        }

    }
    else if (c === 'Varna') {
        if (a >= 0 && a <= 500) {

            b = a * 0.045
            console.log(b.toFixed(2));
        }
        else if (a > 500 && a <= 1000) {

            b = a * 0.075
            console.log(b.toFixed(2));
        }
        else if (a > 1000 && a <= 10000) {

            b = a * 0.10
            console.log(b.toFixed(2));
        }
        else if (a >= 10000) {

            b = a * 0.13
            console.log(b.toFixed(2));
        } else {
            console.log(`error`);
        }

    }
    else if (c === 'Plovdiv') {
        if (a >= 0 && a <= 500) {
            b = a * 0.055
            console.log(b.toFixed(2));
        }
        else if (a > 500 && a <= 1000) {

            b = a * 0.08
            console.log(b.toFixed(2));
        }
        else if (a > 1000 && a <= 10000) {
            b = a * 0.12
            console.log(b.toFixed(2));
        }
        else if (a >= 10000) {
            b = a * 0.145
            console.log(b.toFixed(2));
        } else {
            console.log(`error`);
        }

    } else {
        console.log(`error`);
    }
}