function main(input) {
    let regex = />>([A-Z]+[a-z]*)<<([0-9]+\.*[0-9]*)!([0-9]+)/g;
    let match = regex.exec(input)
    let arr = []
    let sum = 0.00;
    console.log(`Bought furniture:`);
    while (match) {
        arr.push(match[1])
        sum += Number(match[2]) * Number(match[3])
        match = regex.exec(input)
    }
    if (arr.length !== 0) {
        console.log(arr.join("\n"));
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}