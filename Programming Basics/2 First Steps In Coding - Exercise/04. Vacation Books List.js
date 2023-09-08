function converter([depozirana, srok, godishen]) {
    let x = Number(depozirana);
    let o = Number(srok);
    let k = Number(godishen);

    let result = x / o;
    result = result / k;
    console.log(result);


}