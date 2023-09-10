function main(Num) {
    let text;
    for (let i = 1; i <= Num; i++) {
        text = ""
        for (let j = 0; j < i; j++) {
            text = text + i + " ";
        }
        console.log(text);
    }
}