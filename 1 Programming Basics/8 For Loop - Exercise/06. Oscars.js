function main(input) {
    let a = input[0]
    let b = Number(input[1])
    let c = Number(input[2])

    let index = 3;
    let index2 = 4;
    let p = 0

    for (let i = 0; i < c; i++) {
        p = input[index].length

        b = b + ((p * input[index2]) / 2)

        if (b > 1250.5) {
            console.log(`Congratulations, ${a} got a nominee for leading role with ${b.toFixed(1)}!`);
            return
        }
        index = index + 2
        index2 = index2 + 2
    }

    if (b < 1250.5) {
        let result = 1250.5 - b
        console.log(`Sorry, ${a} you need ${result.toFixed(1)} more!`);
        return
    }
}
