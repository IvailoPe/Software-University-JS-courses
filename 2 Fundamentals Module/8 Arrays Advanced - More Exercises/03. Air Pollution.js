function main(map, command) {
    map = map.map(x => x.split(" "));
    map = map.map(x => x.map(Number))
    for (let i = 0; i < command.length; i++) {
        map = map.map(function (miniarr) {
            return miniarr.map(function (x) {
                if (x < 0) {
                    return x = 0
                }
                else {
                    return x
                }
            })
        })
        switch (command[i].split(" ")[0]) {
            case "breeze":
                map[command[i].split(" ")[1]] = map[command[i].split(" ")[1]].map(x => Number(x) - 15)
                break;
            case "gale":
                let index = command[i].split(" ")[1]
                for (let i = 0; i < 5; i++) {
                    for (let j = index; j < index + 1; j++) {
                        map[i][j] = Number(map[i][j]) - 20
                        break;
                    }
                }
                break;
            case "smog":
                map = map.map(function (miniarr) {
                    return miniarr.map(element => Number(element) + Number(command[i].split(" ")[1]))
                })
                break;
        }
    }
    let resultArr = [];
    let element = 0

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (Number(map[i][j]) >= 50) {
                resultArr[element] = `[${i}-${j}]`
                element++;
            }
        }
    }
    if (resultArr.length === 0) {
        console.log(`No polluted areas`);
        return
    }
    console.log(`Polluted areas: ${resultArr.join(", ")}`)
}