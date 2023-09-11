function main(input) {
    let obj = new Map()
    input = input.split(" ")
    input = input.map(x => x.toLowerCase())
    for (const iterator of input) {
        if (!obj.has(iterator)) {
            obj.set(iterator, 0);
        }
    }
    for (iterator of input) {
        if (obj.has(iterator)) {
            obj.set(iterator, obj.get(iterator) + 1)
        }
    }
    let str = ''
    for (const iterator of obj) {
        if (iterator[1] % 2 !== 0) {
            str = str + iterator[0] + " "
        }
    }
    console.log(str);
}
