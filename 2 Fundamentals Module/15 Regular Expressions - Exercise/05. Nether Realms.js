function main(input) {
    let firstPattern = /[^\,\s]+/g;

    let secondPattern = /[^0-9+\-\*\/\.]+/g;

    let thirdPattern = /[-+]*[0-9]+\.*[0-9]*/g;

    let forthPattern = /[\*\/]/g;
    let names = []
    let match = firstPattern.exec(input)
    while (match !== null) {
        let sum = 0
        let secondSum = 0
        let secondMatch = secondPattern.exec(match[0])
        while (secondMatch !== null) {
            for (const iterator of secondMatch[0]) {
                sum += iterator.charCodeAt()
            }
            secondMatch = secondPattern.exec(match[0])
        }
        let thirdMatch = thirdPattern.exec(match[0])
        while (thirdMatch !== null) {
            secondSum += Number(thirdMatch[0])
            thirdMatch = thirdPattern.exec(match[0])
        }
        let chars = []
        let forthMatch = forthPattern.exec(match[0])
        while (forthMatch !== null) {
            if (forthMatch[0] === '*') {
                chars.push(forthMatch[0])
            }
            else if (forthMatch[0] === '/') {
                chars.push(forthMatch[0])
            }
            forthMatch = forthPattern.exec(match[0])
        }
        chars.forEach(x => {
            if (x === '*') {
                secondSum *= 2
            }
            else if (x === '/') {
                secondSum /= 2
            }
        })
        names.push(`${match[0]} - ${sum} health, ${secondSum.toFixed(2)} damage`)
        match = firstPattern.exec(input)
    }
    names.sort((a, b) => a.localeCompare(b))
    console.log(names.join("\n"));
}