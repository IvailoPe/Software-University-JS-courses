function main(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let index = 2;
    let piece = a * b;
    let result = piece;
    while (input) {
        if (input[index] === 'STOP') {
            console.log(`${result} pieces are left.`);
            return
        }
        result = result - Number(input[index])
        if (result < 0) {
            console.log(`No more cake left! You need ${Math.abs(result)} pieces more.`);
            return
        }
        index++
    }
}