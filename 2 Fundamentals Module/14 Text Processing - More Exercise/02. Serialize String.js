function main(text) {
    let obj = {}
    for (let i = 0; i < text[0].length; i++) {
        if (!(obj.hasOwnProperty(text[0][i]))) {
            obj[text[0][i]] = [i]
        }
        else if (obj.hasOwnProperty(text[0][i])) {
            obj[text[0][i]].push(i)
        }
    }
    for (const iterator in obj) {
        console.log(`${iterator}:${obj[iterator].join("/")}`);
    }
}