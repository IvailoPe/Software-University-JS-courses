function main(word) {
    let firstWord = ''
    let secondWord = ''
    firstWord = word.substring(0, word.length / 2)
    secondWord = word.substring(word.length / 2, word.length)
    firstWord = firstWord.split("").reverse().join("")
    secondWord = secondWord.split("").reverse().join("")
    console.log(firstWord);
    console.log(secondWord);
}