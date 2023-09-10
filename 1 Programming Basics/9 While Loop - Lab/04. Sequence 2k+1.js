function main(input) {
    let a = Number(input[0])
    let b = 1

    while (b <= a) {
        console.log(b);
        b = (b * 2) + 1
    }
}