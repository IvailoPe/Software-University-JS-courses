function main(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let c
    let index = 2

    for (let i = 0; i <= a; i++) {

        c = input[index]

        if (c === 'Facebook') {
            b = b - 150
            index++
        }
        else if (c === 'Instagram') {
            b = b - 100
            index++
        }
        else if (c === 'Reddit') {
            b = b - 50
            index++
        }
        else if (c !== 'Reddit' && c !== 'Facebook' && c !== 'Instagram') {
            index++
            continue
        }
        if (b < 0 || b === 0) {
            console.log(`You have lost your salary.`);
            return
        }
    }
    if (b > 0) {
        console.log(Math.round(b));
    }
}
