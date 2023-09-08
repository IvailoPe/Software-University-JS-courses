function converter([depozirana, srok, godishen]) {
    let p = Number(depozirana);
    let k = Number(srok);
    let m = Number(godishen);
    
    
    let x = p * ((m / 100));
    let y = x / 12;
    
    
    let resultl = Number(p + k * y);
    console.log(resultl);
}