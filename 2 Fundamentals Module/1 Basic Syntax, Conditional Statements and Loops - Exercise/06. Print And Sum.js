function main(firstNum, secNum) {
    let text = "";
    let sum = 0;
    for (let i = firstNum; i <= secNum; i++) {
        text = text + i + " ";
        sum += i;
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}