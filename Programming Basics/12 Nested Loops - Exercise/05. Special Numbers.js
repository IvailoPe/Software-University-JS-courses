function main(input) {
    let index = 0
    let tmp = '';
    let tmp2 = " ";
    let broqch = 0
    for (let i = 9999; i >= 1111; i--) {
        tmp = String(i);
        index = 0
        broqch = 0
        while (index !== 4) {
            if (Number(input) % Number(tmp[index]) === 0) {
                broqch++
                index++
            } else {
                index++
            }
        }
        if (broqch === 4) {
            tmp2 = tmp + " " + tmp2
        }
    }
    console.log(tmp2);
}