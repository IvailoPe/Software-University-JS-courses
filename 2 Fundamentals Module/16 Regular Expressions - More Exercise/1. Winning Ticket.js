function main(input) {
    if (input.length === 0) {
        console.log(`invalid ticket`);
        return
    }
    let pattern = /[^,\s]+/g;
    let secondPattern = /(\@{6,}|\#{6,}|\${6,}|\^{6,})/;
    let secondPattern2 = /(\@{6,}|\#{6,}|\${6,}|\^{6,})/;
    let match = pattern.exec(input)
    while (match !== null) {
        if (match[0].length !== 20) {
            console.log(`invalid ticket`);
        }
        else {
            let partOne = match[0].slice(0, 10)
            let partTwo = match[0].slice(10)

            let matchOne = partOne.match(secondPattern)
            let matchTwo = partTwo.match(secondPattern2)
            if (matchOne !== null && matchTwo !== null) {
                if (matchOne[1][0] === matchTwo[1][0]) {
                    let minimum
                    if ((matchTwo[1].length === 10) && (matchOne[1].length === 10)) {
                        minimum = 10
                    }
                    else {
                        if (matchOne[1].length >= matchTwo[1].length) {
                            minimum = matchTwo[1].length
                        }
                        else {
                            minimum = matchOne[1].length
                        }
                    }
                    if (minimum === 10) {
                        console.log(`ticket "${match[0]}" - ${minimum}${matchOne[0][0]} Jackpot!`);
                    } else {
                        console.log(`ticket "${match[0]}" - ${minimum}${matchOne[0][0]}`);
                    }
                }
            }
            else {
                console.log(`ticket "${match[0]}" - no match`);
            }
        }
        match = pattern.exec(input)
    }
}