function printDivision(firstNum, secondNum) {
    let sumOfFirstNum = 1;
    let sumOfSecondNum = 1;
    while (firstNum) {
        sumOfFirstNum *= firstNum;
        firstNum--;
    }
    while (secondNum) {
        sumOfSecondNum *= secondNum;
        secondNum--;
    }
    console.log((sumOfFirstNum / sumOfSecondNum).toFixed(2));
}