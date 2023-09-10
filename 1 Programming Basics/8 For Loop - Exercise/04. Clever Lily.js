function main(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let c = Number(input[2])

    let savings = 0
    let money = 10.00
    let toys = 0
    let brotherTaking = 0
    let result


    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            savings += money
            money = money + 10.00
            brotherTaking++;
        } else if (i % 2 !== 0) {
            toys++;
        }

    }

    toys = toys * c

    result = (savings + toys) - brotherTaking

    if (result >= b) {
        result = result - b
        console.log(`Yes! ${result.toFixed(2)}`);
    } else {
        result = b - result
        console.log(`No! ${result.toFixed(2)}`);
    }
}
