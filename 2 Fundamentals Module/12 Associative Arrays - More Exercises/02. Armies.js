function main(input) {
    let commanders = {}
    for (const iterator of input) {
        let command = iterator;
        if (command.includes("arrives")) {
            commanders[command.split(" arrives")[0]] = []
        }
        else if (command.includes(":")) {
            if (commanders.hasOwnProperty(command.split(":")[0])) {
                commanders[command.split(": ")[0]].push({
                    [command.split(": ")[1].split(", ")[0]]: Number(command.split(": ")[1].split(", ")[1])
                })
            }
        }
        else if (command.includes("+")) {
            for (const iterator in commanders) {
                commanders[iterator].forEach(element => {
                    if (Object.keys(element)[0] === command.split(" + ")[0]) {
                        let key = Object.keys(element)[0]
                        element[key] += Number(command.split(" + ")[1])
                    }
                });
            }
        }
        else if (command.includes("defeated")) {
            delete commanders[command.split(' defeated')[0]]
        }
    }
    let comands = []
    for (const iterator in commanders) {
        let totalArmies = 0;
        commanders[iterator].forEach(x => {
            let key = Object.keys(x)[0]
            totalArmies += x[key]
        })
        comands.push({
            [iterator]: totalArmies
        })
        commanders[iterator].sort((a, b) => {
            return b[Object.keys(b)[0]] - a[Object.keys(a)[0]]
        })
    }
    comands.sort((a, b) => {
        return b[Object.keys(b)[0]] - a[Object.keys(a)[0]]
    })
    for (const iterator of comands) {
        console.log(`${Object.keys(iterator)[0]}: ${Object.values(iterator)[0]}`);
        commanders[Object.keys(iterator)[0]].forEach(x => {
            console.log(`>>> ${Object.keys(x)[0]} - ${Object.values(x)[0]}`);
        })
    }
}