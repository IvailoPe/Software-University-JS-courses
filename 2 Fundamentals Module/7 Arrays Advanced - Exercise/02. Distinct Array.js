function main(input) {
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        for (let j = i + 1; j < input.length; j++) {
            if (num == input[j]) {
                input.splice(j, 1);
            }
            while (num == input[j]) {
                input.splice(j, 1);
            }
        }
    }
    console.log(input.join(" "));
}