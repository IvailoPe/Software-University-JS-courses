function main(input, bomb) {
    while (input.includes(bomb[0])) {
        let start
        let index = input.indexOf(bomb[0]);
        if (index - bomb[1] < 0) {
            start = 0
        } else {
            start = index - bomb[1];
        }
        input.splice(start, bomb[1] + bomb[1] + 1)
    }
    let result = 0;
    for (let iterator of input) {
        result += iterator;
    }
    console.log(result);
}