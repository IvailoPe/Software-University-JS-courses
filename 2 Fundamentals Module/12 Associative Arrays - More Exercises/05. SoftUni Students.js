function main(input) {
    let programsAndCappacity = {};
    let programs = {};
    for (const iterator of input) {
        if (iterator.includes(":")) {
            if (!programs.hasOwnProperty(iterator.split(": ")[0])) {
                programs[iterator.split(": ")[0]] = [];
            }
            if (programsAndCappacity.hasOwnProperty(iterator.split(": ")[0])) {
                programsAndCappacity[iterator.split(": ")[0]] += Number(iterator.split(": ")[1])
            } else {
                programsAndCappacity[iterator.split(": ")[0]] = Number(iterator.split(": ")[1])
            }
        }
        else {
            if (programs.hasOwnProperty(iterator.split(" joins ")[1])) {
                if (programsAndCappacity[iterator.split(" joins ")[1]] > 0) {
                    programsAndCappacity[iterator.split(" joins ")[1]]--;
                    //console.log(iterator.split(" with email ")[1].split(" joins "))
                    programs[iterator.split(" joins ")[1]].push(`${iterator.split(" with email ")[0].split("[")[1].split("]")[0]} ${iterator.split(" with email ")[0].split("[")[0]} ${iterator.split(" with email ")[1].split(" joins ")[0]}`)
                }
            }
        }
    }
    for (const key in programs) {
        programs[key].sort((a, b) => {
            return b.split(" ")[0] - a.split(" ")[0]
        })
    }
    let sortedPrograms = [...Object.entries(programs)]
    //console.log(Object.entries(programs)[0]);
    sortedPrograms.sort((a, b) => {
        return b[1].length - a[1].length
    })
    for (const iterator of sortedPrograms) {
        console.log(`${iterator[0]}: ${programsAndCappacity[iterator[0]]} places left`);
        programs[iterator[0]].forEach(element => {
            console.log(`--- ${element.split(" ")[0]}: ${element.split(" ")[1]}, ${element.split(" ")[2]}`);
        });
    }
    //console.log(sortedPrograms[0]);
}