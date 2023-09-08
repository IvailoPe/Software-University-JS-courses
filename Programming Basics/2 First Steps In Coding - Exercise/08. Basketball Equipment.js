function converter(input) {
    let a = Number(input[0]);

    let ka = a - (a * 0.40)
    let kb = ka;
    kb = kb - (kb * 0.20)
    let k = 1 / 4;
    let kc = kb * k
    let p = 1 / 5;
    let kd = kc * p

    let result
    result = a + ka + kb + kc + kd

    console.log(result)
}