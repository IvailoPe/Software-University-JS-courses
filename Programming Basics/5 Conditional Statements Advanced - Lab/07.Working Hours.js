function main(input) {
    let a = Number(input[0])
    let b = input[1]

    if (a >= 10 && a <= 18) {
        if (b !== 'Sunday') {
            console.log(`open`);
        } else {
            console.log(`closed`);
        }
    }
    else {
        console.log(`closed`);
    }
}