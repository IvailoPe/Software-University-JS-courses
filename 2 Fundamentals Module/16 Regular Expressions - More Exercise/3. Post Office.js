function main(input) {
    let firstPart = input[0].split("|")[0]
    let secondPart = input[0].split("|")[1]
    let thirdPart = input[0].split("|")[2].split(" ")

    let pattern = /(#|\$|%|\*|&)(?<words>[A-Z]{1,})\1/g;
    let chars = pattern.exec(firstPart).groups["words"].split("").map(x => x.charCodeAt());

    let secondPattern = /([0-9]{2}):([012][0-9])/g;
    let match = secondPattern.exec(secondPart)
    let words = new Map()
    chars.forEach(x => {
        words.set(x, null)
    })
    while (match !== null) {
        if (chars.includes(Number(match[1]))) {
            words.set(Number(match[1]), Number(match[2]))
        }
        match = secondPattern.exec(secondPart)
    }
    for (const fromWords of words) {
        for (const fromPart of thirdPart) {
            if (fromPart[0].charCodeAt() === fromWords[0] && fromPart.substring(1).length === fromWords[1]) {
                console.log(fromPart);
            }
        }
    }
}