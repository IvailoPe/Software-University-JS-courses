function main(input) {
    let a = Number(input[0])
    let b = Number(input[1])

    let index = 2
    let broqch = 0;

    let sredno = 0


    for (let i = 0; i < a; i++) {
        if (input[index] === 'F') {
            b = b + 1200
            sredno = sredno + 1200

        }
        else if (input[index] === 'SF') {
            b = b + 720
            sredno = sredno + 720
        }
        else if (input[index] === 'W') {
            b = b + 2000
            sredno = sredno + 2000
            broqch++;
        }
        index++
    }
    sredno = sredno / a

    let secresult = (broqch / a) * 100

    console.log(`Final points: ${b}`);
    console.log(`Average points: ${Math.floor(sredno)}`);
    console.log(`${secresult.toFixed(2)}%`);
}