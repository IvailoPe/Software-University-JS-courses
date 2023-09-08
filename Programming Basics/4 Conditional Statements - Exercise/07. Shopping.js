function main(input) {
    let num = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let num4 = Number(input[3]);

    let budget = num;
    let video = num2;
    let cpu = num3;
    let ram = num4
    let discount;

    video = video * 250;
    cpu = cpu * (video * 0.35)
    ram = ram * (video * 0.10)

    let res = video + cpu + ram;
    let tmp = res;

    if (num2 > num3) {
        discount = 0.15
        res = res * discount;
        tmp = tmp - res
    }

    if (tmp <= num) {
        tmp = num - tmp
        console.log(`You have ${tmp.toFixed(2)} leva left!`);
    } else {
        tmp = tmp - num;
        console.log(`Not enough money! You need ${tmp.toFixed(2)} leva more!`);
    }
}