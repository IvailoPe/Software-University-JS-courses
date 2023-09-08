function main(input) {
    let c = input[0]
    let a = Number(input[1])
    let b = Number(input[2])

    let income = 0;

    if (c === 'Premiere') {
        income = a * b * 12.00
    }
    else if (c === 'Normal') {
        income = a * b * 7.50
    }
    else if (c === 'Discount') {
        income = a * b * 5.00
    }

    console.log(income);
}