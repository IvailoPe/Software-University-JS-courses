function main(input) {
    let a = Number(input[0])
    let b = input[1]

    if (b === 'f') {
        if (a >= 16) {
            console.log(`Ms.`);
        }
        else if (a < 16) {
            console.log(`Miss`);
        }
    }
    else if (b === 'm') {
        if (a >= 16) {
            console.log(`Mr.`);
        }
        else {
            console.log(`Master`);
        }
    }
}