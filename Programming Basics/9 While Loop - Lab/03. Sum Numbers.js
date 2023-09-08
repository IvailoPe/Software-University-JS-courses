function main(input) {
    let a = Number(input[0])

    let sum = 0;
    let index = 1

    while (sum < a) {
        sum = sum + Number(input[index])
        index++;
    }
    console.log(sum);
}