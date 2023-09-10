function main(input) {
    let a = Number(input[0])
    let b = input[1]
    let c = input[2]

    let discount = 0;

    let o = a - 1
    let room = 18.00;
    let apartment = 25.00;
    let president = 35.00;


    if (a < 10) {
        if (b === 'room for one person') {
            o = o * room
        }
        else if (b === 'apartment') {
            discount = 0.30;
            o = o * apartment

            o = o - (o * discount)
        }
        else if (b === 'president apartment') {
            discount = 0.10;
            o = o * president

            o = o - (o * discount)
        }
    }
    else if (a >= 10 && a <= 15) {
        if (b === 'room for one person') {
            o = o * room
        }
        else if (b === 'apartment') {
            discount = 0.35;
            o = o * apartment

            o = o - (o * discount)
        }
        else if (b === 'president apartment') {
            discount = 0.15;
            o = o * president

            o = o - (o * discount)
        }
    }
    else if (a > 15) {
        if (b === 'room for one person') {
            o = o * room
        }
        else if (b === 'apartment') {
            discount = 0.50;
            o = o * apartment

            o = o - (o * discount)
        }
        else if (b === 'president apartment') {
            discount = 0.20;
            o = o * president

            o = o - (o * discount)
        }
    }
    if (c === 'positive') {
        o = o + (o * 0.25)
    } else if (c === 'negative') {
        o = o - (o * 0.10)
    }
    console.log(o.toFixed(2));
}