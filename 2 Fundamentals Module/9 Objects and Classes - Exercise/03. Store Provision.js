function main(input, secondInput) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            if (input[i] in obj) {
                obj[input[i]] = Number(obj[input[i]]) + Number(input[i + 1])
            } else {
                obj[input[i]] = input[i + 1]
            }
        }
    }
    for (let i = 0; i < secondInput.length; i++) {
        if (i % 2 == 0) {
            if (secondInput[i] in obj) {
                obj[secondInput[i]] = Number(obj[secondInput[i]]) + Number(secondInput[i + 1])
            } else {
                obj[secondInput[i]] = secondInput[i + 1]
            }
        }
    }
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }
} 