function main(input) {
    let a = ''
    let cur = 1;
    let bool = false;
    for (let i = 1; i <= Number(input[0]); i++) {
        for (let b = 1; b <= i; b++) {
            a += cur += " "
            cur++
            if (cur > Number(input[0])) {
                bool = true;
                break;
            }
        }
        console.log(a);
        a = ""
        if (bool) {
            break;
        }
    }
}