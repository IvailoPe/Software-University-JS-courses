function stringSubstring(word, text) {
    text = text.toLowerCase();
    word = word.toLowerCase();
    let flag = true;
    let wordsArr = text.split(" ");
    for (const iterator of wordsArr) {
        if (iterator === word) {
            return console.log(word);
        }
        else flag = false;
    }
    if (!flag) console.log(`${word} not found!`);
}