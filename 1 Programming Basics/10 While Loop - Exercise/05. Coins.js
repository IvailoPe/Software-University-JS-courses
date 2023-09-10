function main(input) {
    let result = 0;
    let index = 0;
    let broqch = 0;
    result = Number(input[index]);

    while (Number(input[index])) {
        if (result >= 2) {
            result = result - 2
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 1) {
            result = result - 1
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.50) {
            result = result - 0.50
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.20) {
            result = result - 0.20
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.10) {
            result = result - 0.10
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.05) {
            result = result - 0.05
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.02) {
            result = result - 0.02
            result = result.toFixed(2)
            broqch++
        }
        else if (result >= 0.01) {
            result = result - 0.01
            result = result.toFixed(2)
            broqch++
        }
        if (result <= 0) {
            break;
        }
    }
    console.log(broqch);
}