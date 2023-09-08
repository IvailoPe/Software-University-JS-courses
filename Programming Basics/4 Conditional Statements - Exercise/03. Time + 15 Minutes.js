function main(input) {
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    num2 = num2 + 15;
    if (num2 >= 60) {
        num = num + 1;
        num2 = num2 - 60;
    } else {

    }

    if (num == 24) {
        num = num * 0;
    }

    if (num2 < 10) {
        console.log(`${num}:0${num2}`)
    } else {
        console.log(`${num}:${num2}`);
    }
}