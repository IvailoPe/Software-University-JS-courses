function Cost(num){
    let result1, result2;
    result1 = num * 7.61;
    result2 = 0.18 * result1;
    let tmp = result2;
    result2 = result1 - result2;

    console.log(`The final price is: ${result2} lv.`);
    console.log(`The discount is: ${tmp} lv.`);

}