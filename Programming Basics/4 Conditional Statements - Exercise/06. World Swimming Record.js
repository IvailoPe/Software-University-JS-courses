function main(input) {
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let tmp = num2 * num3;
    let tmp1 = num2 / 15;
    tmp1 = Math.floor(tmp1);
    let tmp2 = tmp1 * 12.5
    let tmp3;

    tmp3 = tmp + tmp2;

    if (num <= tmp3) {
        tmp3 = tmp3 - num
        console.log(`No, he failed! He was ${tmp3.toFixed(2)} seconds slower.`)
    } else {

        console.log(`Yes, he succeeded! The new world record is ${tmp3.toFixed(2)} seconds.`)
    }
}