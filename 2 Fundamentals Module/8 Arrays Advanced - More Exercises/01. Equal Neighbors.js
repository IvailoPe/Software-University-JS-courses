function main(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (i < input.length - 1) {
                let first = input[i][j] === input[i][j + 1];
                let second = input[i][j] === input[i + 1][j];
                if (input[i][j] === input[i][j + 1] || input[i][j] === input[i + 1][j]) {
                    counter++;
                    if (first && second === true) {
                        if (input[i][j] === input[i][j + 1] || input[i][j] === input[i + 1][j]) {
                            counter++;
                        }
                    }
                }
            } else {
                if (input[i][j] === input[i][j + 1]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}