function converter(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);

    let ka = a * b * c;
    let kb = ka / 1000
    let k = d / 100;

    let result
    result = kb * (1 - k)

    console.log(result)
}