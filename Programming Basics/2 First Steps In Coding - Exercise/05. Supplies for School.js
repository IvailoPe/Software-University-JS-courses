function converter([depozirana, srok, godishen, neshto]) {
    let a = Number(depozirana);
    let b = Number(srok);
    let c = Number(godishen);
    let d = Number(neshto);
    d = d / 100
    let ko;
    a = a * 5.80;
    b = b * 7.20;
    c = c * 1.20;
    ko = a + b + c;

    let result

    result = ko - (ko * d);

    console.log(result)
}