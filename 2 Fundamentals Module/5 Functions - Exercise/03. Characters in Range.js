function printAsciChars(a, b) {
    let firstNum = a.charCodeAt();
    let secondNum = b.charCodeAt();
    let text = '';
    if (secondNum < firstNum) {
        let temp = secondNum;
        secondNum = firstNum;
        firstNum = temp;
    }
    for (let i = firstNum + 1; i < secondNum; i++) {
        text = text + ` ${String.fromCharCode(i)}`
    }
    console.log(text);
}