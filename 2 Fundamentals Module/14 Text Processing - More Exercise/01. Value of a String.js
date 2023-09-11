function main(text) {
    let sum = 0;
    if (text[1] == 'UPPERCASE') {
        for (let iterator of text[0]) {
            if ((iterator === iterator.toUpperCase()) && (iterator.charCodeAt() >= 65 && iterator.charCodeAt() <= 90)) {
                sum += iterator.charCodeAt()
            }
        }
    }
    else {
        for (let iterator of text[0]) {
            if ((iterator === iterator.toLowerCase()) && (iterator.charCodeAt() >= 97 && iterator.charCodeAt() <= 122)) {
                sum += iterator.charCodeAt()
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}