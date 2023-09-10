function main(input) {
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let result = num + num2 + num3;

    let minues = Math.floor(result / 60)
    let seconds = result % 60

    if (seconds < 10) {
        console.log(`${minues}:0${seconds}`)
    } else {
        console.log(`${minues}:${seconds}`)
    }
}