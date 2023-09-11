function main(input) {
    let text = input[0]
    let pattern = input[1]
    let firstOcurance
    let secondOcurance
    while (text.includes(pattern)) {
        firstOcurance = text.indexOf(pattern)
        secondOcurance = text.lastIndexOf(pattern)
        if ((firstOcurance === secondOcurance)) {
            break;
        }
        text = text.split("")
        text.splice(secondOcurance, pattern.length)
        text.splice(firstOcurance, pattern.length)
        let str = ''
        text.forEach(x => str += x)
        text = str
        str = ''
        pattern = pattern.split("")
        pattern.splice(pattern.length / 2, 1)
        pattern.forEach(x => str += x)
        pattern = str
        console.log(`Shaked it.`);
        if (pattern.length === 0) {
            break;
        }
    }
    console.log(`No shake.`);
    console.log(text);
}