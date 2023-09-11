function main(input) {
    let fstr = ''
    for (const iterator of input) {
        fstr += iterator.toUpperCase()
    }
    let pattern = /([^0-9]+)([0-9]*)/g;
    let match = pattern.exec(fstr);
    let str = ''
    let uniq = new Set()
    while (match !== null) {
        str += match[1].repeat(Number(match[2]))
        match = pattern.exec(fstr);
    }
    for (const iterator of str) {
        uniq.add(iterator)
    }
    console.log(`Unique symbols used: ${uniq.size}`);
    console.log(str);
}