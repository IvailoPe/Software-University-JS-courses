function main(input) {
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let num4 = Number(input[3]);
    let num5 = Number(input[4]);
    let num6 = Number(input[5]);
    let tmp2
    let pechalba;
    let ismorethan50 = num2 + num3 + num4 + num5 + num6;
    let sum = (num2 * 2.60 + num3 * 3 + num4 * 4.10 + num5 * 8.20 + num6 * 2)

    let tmp = sum;
    if (ismorethan50 >= 50) {
        sum = sum * 0.25;
        tmp = tmp - sum;
        tmp2 = tmp;

        tmp = tmp * 0.10
        let result = tmp2 - tmp;
        if (result >= num) {
            result = result - num;
            console.log(`Yes! ${result.toFixed(2)} lv left.`);
        } else {
            result = num - result
            console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
        }

    } else {
        tmp = tmp * 0.10
        pechalba = sum - tmp;
        if (pechalba >= num) {
            pechalba = pechalba - num;
            console.log(`Yes! ${pechalba.toFixed(2)} lv left.`);
        } else {
            pechalba = num - pechalba
            console.log(`Not enough money! ${pechalba.toFixed(2)} lv needed.`)
        }

    }
}