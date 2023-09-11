function main(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        newArr[i] = JSON.parse(input[i]);
        //console.log(newArr[i]);
    }
    newArr.forEach(x => x.sort((a, b) => b - a))

    newArr = newArr.map(x => JSON.stringify(x))
    let secondArr = []
    newArr.forEach(x => {
        if (!secondArr.includes(x)) {
            secondArr.push(x)
        }
    })
    secondArr = secondArr.map(x => JSON.parse(x))
    secondArr.sort((a, b) => a.length - b.length)

    for (let i = 0; i < secondArr.length; i++) {
        console.log(`[${secondArr[i].join(", ")}]`);
    }

}