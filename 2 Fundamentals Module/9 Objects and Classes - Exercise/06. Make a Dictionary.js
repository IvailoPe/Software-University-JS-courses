function main(input) {
    let dict = input;
    dict = dict.map(x => JSON.parse(x));
    dict = dict.sort((a, b) => {
        let [key1] = Object.keys(a);
        let [key2] = Object.keys(b);
        return key1.localeCompare(key2)
    })
    let obj = {};
    for (let i = 0; i < dict.length; i++) {
        if (obj[dict[i]]) {
            obj[Object.keys(dict[i])[0]] = Object.values(dict[i])[0]
        } else {
            obj[Object.keys(dict[i])[0]] = Object.values(dict[i])[0]
        }
    }
    for (const iterator of Object.keys(obj)) {
        console.log(`Term: ${iterator} => Definition: ${obj[iterator]}`);
    }
}