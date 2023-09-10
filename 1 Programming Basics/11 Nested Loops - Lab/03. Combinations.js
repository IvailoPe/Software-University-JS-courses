function main(input) {
    let res = 0;
    for (let i = 0; i <= Number(input); i++) {
        for (let j = 0; j <= Number(input); j++) {
            for (let k = 0; k <= Number(input); k++) {
                if (i + j + k === Number(input)) {
                    res++;
                }

            }
        }
    }
    console.log(res);
}