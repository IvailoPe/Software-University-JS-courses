function main(input) {

    let a = Number(input[0])
    let c = input[1]
    let b = Number(input[2])

    let naem
    let discount = 0
    let moredis = 0;

    if (c === 'Winter') {
        naem = 2600
    }
    else if (c === 'Summer' || c === 'Autumn') {
        naem = 4200
    }
    else if (c === 'Spring') {
        naem = 3000
    }

    if (b <= 6) {
        discount = 0.10
    }
    else if (b > 7 && b <= 11) {
        discount = 0.15
    }
    else if (b > 12) {
        discount = 0.25
    }

    if (b % 2 === 0 && c != 'Autumn') {
        moredis = 0.05
    }

    if (discount > 0 && moredis > 0) {
        naem = naem - (naem * discount)
        naem = naem - (naem * moredis)

        if (naem > a) {
            naem = naem - a
            console.log(`Not enough money! You need ${naem.toFixed(2)} leva.`);
        } else {
            naem = a - naem
            console.log(`Yes! You have ${naem.toFixed(2)} leva left.`);
        }
    }
    else if (discount > 0) {
        naem = naem - (naem * discount)
        if (naem > a) {

            naem = naem - a
            console.log(`Not enough money! You need ${naem.toFixed(2)} leva.`);
        } else {
            naem = a - naem
            console.log(`Yes! You have ${naem.toFixed(2)} leva left.`);
        }

    }
    else if (moredis > 0) {
        naem = naem - (naem * moredis)

        if (naem > a) {
            naem = naem - a
            console.log(`Not enough money! You need ${naem.toFixed(2)} leva.`);
        } else {
            naem = a - naem
            console.log(`Yes! You have ${naem.toFixed(2)} leva left.`);
        }
    }
}