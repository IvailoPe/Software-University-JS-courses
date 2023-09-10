function main(input) {
    let a = 0
    for (let i = 0; i < 1000; i++) {
        if (Number(input[i]) < 0) {
            console.log(`Invalid operation!`);
            console.log(`Total: ${a.toFixed(2)}`);
            return
        }

        if (input[i] === 'NoMoreMoney') {
            console.log(`Total: ${a.toFixed(2)}`);
            return
        }
        a = Number(input[i]) + a;
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
    }
}