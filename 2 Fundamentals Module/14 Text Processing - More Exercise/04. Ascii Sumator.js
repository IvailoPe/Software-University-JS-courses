function main(text) {
    let asciOfFirst = text[0].charCodeAt()
    let asciOfSecond = text[1].charCodeAt()
    let sum = 0
    for (const iterator of text[2]) {
        if (asciOfFirst > asciOfSecond) {
            if ((asciOfFirst > iterator.charCodeAt()) && (asciOfSecond < iterator.charCodeAt())) {
                sum += iterator.charCodeAt()
            }
        }
        else {
            if ((asciOfSecond > iterator.charCodeAt()) && (asciOfFirst < iterator.charCodeAt())) {
                sum += iterator.charCodeAt()
            }
        }
    }
    console.log(sum);
}