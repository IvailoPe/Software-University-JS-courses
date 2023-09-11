function main(text) {
    let i = 0
    let sum = 0;
    for (const iterator of text) {
        if (iterator !== 'end') {
            sum += (iterator.split(":")[1].split("/")).length
        }
    }
    let str = "_".repeat(sum).split("")
    while (text[i] !== 'end') {
        let char = text[i].split(":")[0]
        let indexes = text[i].split(":")[1].split("/")
        for (let i = 0; i < indexes.length; i++) {
            str.splice(indexes[i], 1, char)
        }
        i++
    }
    console.log(str.join(""));
}