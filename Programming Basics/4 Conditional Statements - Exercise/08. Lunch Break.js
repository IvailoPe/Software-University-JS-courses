function main(input) {
    let a = input[0];
    let b = Number(input[1]);
    let c = Number(input[2]);

    let r;

    let tmp = c * 0.125;
    let tmp2 = c * 0.25;
    let tmp3 = c - tmp2 - tmp;

    if (tmp3 >= b) {
        r = tmp3 - b;
        console.log(`You have enough time to watch ${a} and left with ${Math.ceil(r)} minutes free time.`);
    } else {
        r = b - tmp3;
        console.log(`You don't have enough time to watch ${a}, you need ${Math.ceil(r)} more minutes.`);
    }
}