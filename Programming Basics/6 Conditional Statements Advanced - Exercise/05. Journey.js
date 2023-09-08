function main(input) {

    let a = Number(input[0])
    let c = input[1]

    let place
    let result;
    let house

    if (a <= 100) {
        place = 'Bulgaria'
        if (c === 'summer') {
            result = a * 0.30
            house = `Camp`
        }
        else if (c === `winter`) {
            result = a * 0.70
            house = `Hotel`
        }
    }
    else if (a > 100 && a <= 1000) {
        place = 'Balkans'
        if (c === 'summer') {
            result = a * 0.40
            house = `Camp`
        }
        else if (c === `winter`) {
            result = a * 0.80
            house = `Hotel`
        }

    }
    else if (a > 1000) {
        place = 'Europe'
        if (c === 'summer' || c === 'winter') {
            result = a * 0.90
            house = `Hotel`
        }

    }
    console.log(`Somewhere in ${place}`);
    console.log(`${house} - ${result.toFixed(2)}`);
}