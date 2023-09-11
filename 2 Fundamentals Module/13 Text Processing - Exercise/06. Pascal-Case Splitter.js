function main(word) {
    let words = []
    let start = 0;
    let end = 1;
    for (let index = 1; index < word.length; index++) {
        if (word[index] === word[index].toUpperCase()) {
            words.push(word.substring(start, end));
            start = end
            end++;
        }
        else {
            end++;
        }
        if (index + 1 === word.length) {
            words.push(word.substring(start, end))
        }
    }
    console.log(words.join(", "));
}