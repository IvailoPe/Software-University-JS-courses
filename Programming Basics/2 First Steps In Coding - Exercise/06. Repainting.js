function converter(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);

    let ka = (a + 2) * 1.50;
    let kb = (b + b * 0.1) * 14.50;
    let kc = c * 5.00;
    let kd = ka + kb + kc + 0.40
    let kj = (kd * 0.30) * d;

    let result
    result = kd + kj

    console.log(result)
}
