function main(input) {
    let text = input[0].concat(input[1])
    let specialWord = input[2]
    let index = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            text = text.replace(text[i], specialWord[index].toUpperCase())
            index++;
            if (index === specialWord.length) {
                index = 0;
            }
        }
    }
    console.log(`Your generated password is ${text.split("").reverse().join("")}`);
}