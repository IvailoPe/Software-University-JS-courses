function main(input) {
    let c = input[0]
    let a = Number(input[1])
    let b = Number(input[2])

    let discount = 0;
    let price;
    let result;

    if (c === 'Roses') {
        if (a > 80) {
            discount = 0.10
            price = 5
            result = a * (price - (price * discount))
        } else {
            price = 5
            result = a * price;
        }
    }
    else if (c === 'Dahlias') {
        if (a > 90) {
            discount = 0.15
            price = 3.80
            result = a * (price - (price * discount))
        } else {
            price = 3.80
            result = a * price;
        }
    }
    else if (c === 'Tulips') {
        if (a > 80) {
            discount = 0.15
            price = 2.80
            result = a * (price - (price * discount))
        } else {
            price = 2.80
            result = a * price;
        }
    }
    else if (c === 'Narcissus') {
        if (a < 120) {
            discount = 0.15
            price = 3
            result = a * (price + (price * discount))
        } else {
            price = 3
            result = a * price;
        }
    }
    else if (c === 'Gladiolus') {
        if (a < 80) {
            discount = 0.20
            price = 2.50
            result = a * (price + (price * discount))
        } else {
            price = 2.50
            result = a * price;
        }
    }
    if (result > b) {
        result = result - b
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
    } else {
        result = b - result
        console.log(`Hey, you have a great garden with ${a} ${c} and ${result.toFixed(2)} leva left.`);
    }
}