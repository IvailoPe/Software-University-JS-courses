function main(input) {
    let a = Number(input[0])

    let broqch = 0;
    let broqch1 = 0;
    let broqch2 = 0;
    let broqch3 = 0;
    let broqch4 = 0;

    let result = 0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;

    for (let i = 1; i <= a; i++) {
        let b = Number(input[i]);
        if (b < 200) {
            broqch++
        }

        else if (b >= 200 && b <= 399) {
            broqch1++
        }

        else if (b >= 400 && b <= 599) {
            broqch2++
        }

        else if (b >= 600 && b <= 799) {
            broqch3++
        }
        else if (b >= 800) {
            broqch4++
        }

    }

    result = (broqch / a) * 100;
    result1 = (broqch1 / a) * 100;
    result2 = (broqch2 / a) * 100;
    result3 = (broqch3 / a) * 100;
    result4 = (broqch4 / a) * 100;

    console.log(`${result.toFixed(2)}%`);
    console.log(`${result1.toFixed(2)}%`);
    console.log(`${result2.toFixed(2)}%`);
    console.log(`${result3.toFixed(2)}%`);
    console.log(`${result4.toFixed(2)}%`);
}
