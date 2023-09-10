function converter(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let ka = a * 10.35;
    let kb = b * 12.40;
    let kc = c * 8.15;
    let kd = ka + kb + kc
    let kj = 0.2 * kd;

    let result

    result = kd + kj + 2.50;

    console.log(result)
}