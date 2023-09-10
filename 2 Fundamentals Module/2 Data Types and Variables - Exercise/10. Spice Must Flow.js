function main(num) {
    let record = num;
    let result = 0;
    let broqch = 0;
    while (true) {
        if (record < 100) {
            result -= 26
            if (result < 0) {
                result = 0
            }
            break;
        }
        broqch++;
        result += record;
        result -= 26;
        record -= 10;
    }
    console.log(broqch);
    console.log(result);
}