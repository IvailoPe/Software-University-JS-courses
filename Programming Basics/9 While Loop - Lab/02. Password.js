function main(input) {
    let a = input[0]
    let b = input[1]

    let index = 2

    while (input[index] !== b) {
        index++;
    }

    console.log(`Welcome ${a}!`);
}