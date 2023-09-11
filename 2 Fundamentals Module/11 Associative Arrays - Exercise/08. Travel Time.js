function main(input) {
    let countrys = {}
    for (const iterator of input) {
        if (!countrys.hasOwnProperty(iterator.split(" > ")[0])) {
            countrys[iterator.split(" > ")[0]] = []
        }
    }
    for (const iterator of input) {
        let bool = true;
        if (countrys.hasOwnProperty(iterator.split(" > ")[0])) {
            countrys[iterator.split(" > ")[0]].forEach(element => {
                if (element.hasOwnProperty(iterator.split(" > ")[1])) {
                    if (Number(iterator.split(" > ")[2]) < element[iterator.split(" > ")[1]])
                        element[iterator.split(" > ")[1]] = Number(iterator.split(" > ")[2])
                    bool = false;
                }
            });
            if (bool) {
                countrys[iterator.split(" > ")[0]].push({ [iterator.split(" > ")[1]]: Number(iterator.split(" > ")[2]) })
            }
        }
    }
    let arr = []
    for (const key in countrys) {
        arr.push(key);
    }
    arr.sort((a, b) => {
        return a.localeCompare(b)
    })
    for (const iterator of arr) {
        countrys[iterator].sort((a, b) => {
            let key1 = Object.keys(a)
            let key2 = Object.keys(b)
            return a[key1] - b[key2]
        });
    }
    for (const iterator of arr) {
        // let keyy = Object.keys(countrys[iterator][0])
        // let str = `${iterator} -> ${keyy}`
        let str = `${iterator} ->`
        countrys[iterator].forEach(x => {
            let key = Object.keys(x)
            str = `${str} ${key} -> ${x[key]}`
        })
        console.log(str);
    }
}