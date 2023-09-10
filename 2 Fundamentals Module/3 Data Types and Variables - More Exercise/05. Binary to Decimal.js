function main(binary) {
    let result = 0;
    let counter = binary.length - 1;
    for (let i = 0; i < binary.length; i++) {
        result += Number(binary[i]) * Math.pow(2, counter--)
    }
    console.log(result);
}