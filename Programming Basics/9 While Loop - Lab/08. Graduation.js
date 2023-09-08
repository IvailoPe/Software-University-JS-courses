function main(input) {
    let a = input[0]
    let broqch = 0;
    let sredno = 0

    while (input) {
        for (let i = 1; i < input.length; i++) {
            sredno = sredno + Number(input[i])
            broqch++;
            if (Number(input[i]) <= 3) {
                console.log(`${a} has been excluded at ${broqch} grade`);
                return
            }
        }
        if ((sredno / broqch) >= 4.00) {
            console.log(`${a} graduated. Average grade: ${(sredno / broqch).toFixed(2)}`);
            return
        } else {
            console.log(`${a} has been excluded at ${broqch} grade`);
            return
        }
    }
}