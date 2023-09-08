function main(input) {
    let inputt = Number(input[0])
    let a = 1;

    for (let index = 1; index <= inputt; index++) {

        console.log(a);
        a = a + 3
        if (a > inputt) {
            return
        }

    }

}