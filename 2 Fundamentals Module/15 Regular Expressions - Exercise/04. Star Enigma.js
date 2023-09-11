function main(input) {
    let patern = /([star])/gi;
    let counter = 0
    let attackedPlanets = []
    let destroyedPlanets = []
    for (let index = 1; index <= Number(input[0]); index++) {
        counter = 0
        let match = patern.exec(input[index])
        if (match !== null) {
            while (match !== null) {
                counter++
                match = patern.exec(input[index])
            }
        }
        input[index] = input[index].split("")
        let str = ''
        for (let i = 0; i < input[index].length; i++) {
            str += String.fromCharCode(input[index][i].charCodeAt() - counter)
        }
        let pattern2 = /[^@\-!:>]*@([A-Za-z]+)[^@\-!:>]*:([0-9]+)[^@\-!:>]*!(A|D)![^@\-!:>]*->([0-9]+)[^@\-!:>]*/g;
        match = pattern2.exec(str);
        if (match !== null) {
            while (match !== null) {
                if (match[3] === 'A') {
                    attackedPlanets.push(match[1])
                }
                else {
                    destroyedPlanets.push(match[1])
                }
                match = pattern2.exec(str);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b))
    destroyedPlanets.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`))
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`))
}