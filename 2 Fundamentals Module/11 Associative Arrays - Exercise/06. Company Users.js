function main(input) {
    let companies = {}
    for (const iterator of input) {
        let name = iterator.split(" -> ")[0];
        companies[name] = new Set()
    }
    for (const iterator of input) {
        let id = iterator.split(" -> ")[1];
        let name = iterator.split(" -> ")[0];
        companies[name].add(id)
    }
    let arr = Object.entries(companies);
    arr.sort((a, b) => {
        return a[0].localeCompare(b[0])
    })
    for (const iterator of arr) {
        console.log(iterator[0]);
        iterator[1].forEach(element => {
            console.log(`-- ${element}`);
        });
    }
    //  console.log(companies);
}