function main(input) {
    let a = Number(input[0])
    let c = Number(input[1])
    let b = 0
    let index = 2
    let result = c;
    let broqch = 0
    let secBroqch = 0
    let index2 = 2
    while (input) {
        if (input[index] === 'spend') {
            secBroqch++
            broqch++
            index2 = index2 + 2
            index++
            if (isNaN(input[index]) === false) {
                b = Number(input[index])

            }
            result = result - b

            if (result <= 0) {
                result = 0;

            }
        }
        else if (input[index] === 'save') {
            secBroqch = 0
            broqch++
            index++
            if (isNaN(input[index]) === false) {
                b = Number(input[index])

            }
            result = result + b
        }
        if (secBroqch >= 5) {

            console.log(`You can't save the money.`);
            console.log(`${broqch}`);
            break
        }
        if (result >= a) {
            console.log(`You saved the money for ${broqch} days.`);
            break;
        }
        index++
    }
}