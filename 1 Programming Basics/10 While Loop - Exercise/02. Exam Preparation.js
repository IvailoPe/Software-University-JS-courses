function main(input) {
    let a = Number(input[0])
    let index = 1;
    let b = ' '
    let c = 0
    let broqch = 0;
    let sum = 0;
    let secondBroqch = 0

    while (input[index] !== 'Enough') {
        if (isNaN(Number(input[index]))) {
            b = input[index];
        }
        else if (!isNaN(Number(input[index]))) {
            c = Number(input[index])
            sum = c + sum
            secondBroqch++;
            if (c <= 4) {
                broqch++;
            }
        }
        if (broqch >= a) {
            console.log(`You need a break, ${broqch} poor grades.`);
            return;
        }

        index++
    }
    console.log(`Average score: ${(sum / secondBroqch).toFixed(2)}`);
    console.log(`Number of problems: ${secondBroqch}`);
    console.log(`Last problem: ${input[index - 2]}`);
}