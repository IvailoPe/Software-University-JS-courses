function main(input) {
    let a = Number(input[0]);
    let tmp = ' '
    let tmp2 = ' '
    let result = 0;
    let score = 0;
    let broqch = 0;
    let index = 1;
    let index2 = 1;
    while (input[index] !== 'Finish') {
        tmp = Number(input[index])
        while (isNaN(tmp) === true) {
            index++
            tmp2 = Number(input[index]);
            if (isNaN(tmp2) === true) {
                break;
            }
            result = Number(input[index]) + result;
        }
        score = (result / a) + score;
        console.log(`${input[index2]} - ${(result / a).toFixed(2)}.`);
        broqch++;
        index2 = index2 + a + 1

        result = 0
    }
    console.log(`Student's final assessment is ${(score / broqch).toFixed(2)}.`);
}
