function main(input) {
    let pattern = /[^|$%\.]*%([A-Z][a-z]+)%[^|$%\.]*<(\w+)>[^|$%\.]*\|([0-9]+)\|[^|$%\.0-9]*([0-9]+\.*[0-9]*)\$[^|$%\.]*/;
    let i = 0;
    let sum = 0.00
    let match = pattern.exec(input[i])
    let counter = 0;
    while (input[i] !== 'end of shift') {
        match = pattern.exec(input[i])
        if (match != null) {
            console.log(`${match[1]}: ${match[2]} - ${(Number(match[3]) * Number(match[4])).toFixed(2)}`);
            sum += Number(match[3]) * Number(match[4])
            counter++;
        }
        i++
        match = pattern.exec(input[i])
    }
    if (counter > 0) {
        console.log(`Total income: ${sum.toFixed(2)}`);
    }
}