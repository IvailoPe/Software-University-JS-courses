function main(input) {
    let res = Number(input[2]);
    let tmp = 0;
    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        for (let j = Number(input[0]); j <= Number(input[1]); j++) {
            tmp++
            if (i + j === res) {
                console.log(`Combination N:${tmp} (${i} + ${j} = ${i + j})`);
                return
            }
        }
    }
    console.log(`${tmp} combinations - neither equals ${Number(input[2])}`);
}