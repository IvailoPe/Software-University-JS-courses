function main(input) {
    let index = 0;
    let a = Number(input[0]);
    for (let i = 1; i < 100; i++) {
        if (a < Number(input[i])) {
            a = Number(input[i])
        }

        if (input[i] === 'Stop') {
            console.log(a);
            return
        }
    }
}
