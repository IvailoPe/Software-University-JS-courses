function main(input) {
    let text = input.split(" ")
    while (text.includes("")) {
        let index = text.indexOf("")
        text.splice(index, 1)
    }
    let nums = []
    let chars = {}
    let counter = 1;
    for (let index = 97; index <= 122; index++) {
        chars[String.fromCharCode(index)] = counter
        counter++;
    }
    for (let index = 0; index < text.length; index++) {
        let number = Number(text[index].substring(1, text[index].length - 1))
        let firstLetter = text[index][0]
        let lastLetter = text[index][text[index].length - 1]
        if (firstLetter === firstLetter.toUpperCase()) {
            number /= chars[firstLetter.toLowerCase()]
        }
        else {
            number *= chars[firstLetter.toLowerCase()]
        }
        if (lastLetter === lastLetter.toUpperCase()) {
            number -= chars[lastLetter.toLowerCase()]
        }
        else {
            number += chars[lastLetter.toLowerCase()]
        }
        nums.push(number)
    }
    let result = 0.00
    for (const iterator of nums) {
        result += iterator
    }
    console.log(result.toFixed(2));
}