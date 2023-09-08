function main(input) {
    let a = '';
    for (let i = Number(input[0]); i > 0; i--) {
        for (let b = Number(input[1]) - 1; b >= 0; b--) {
            if (i === Number(input[0])) {
                a = "L" + String(i) + String(b) + " " + a
            }
            else if (i % 2 === 0) {
                a = "O" + String(i) + String(b) + " " + a
            }
            else if (i % 2 !== 0) {
                a = "A" + String(i) + String(b) + " " + a
            }
            if (b === 0) {
                for (let v = 0; v < 1; v++) {
                    console.log(a);
                    a = ''

                }
            }
        }
    }
}