function main(word) {
    let str = ''
    for (let index = 0; index < word.length; index++) {
        if (!(word[index] == word[index + 1])) {
            str += word[index];
        }
    }
    console.log(str);
}