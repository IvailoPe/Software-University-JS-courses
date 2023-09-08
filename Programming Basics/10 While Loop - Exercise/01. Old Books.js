function main(input) {
    let a = input[0]
    let broqch = 0;

    while (input) {
        for (let i = 1; i < input.length; i++) {
            if (input[i] === a) {
                console.log(`You checked ${broqch} books and found it.`);
                return
            }
            if (input[i] === 'No More Books') {
                console.log(`The book you search is not here!`);
                console.log(`You checked ${broqch} books.`);
                return
            }
            broqch++
        }
    }
}