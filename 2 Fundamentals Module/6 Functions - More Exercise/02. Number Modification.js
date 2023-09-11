function main(num) {
    let result = 0;
    while (true) {
        result = 0
        for (let i = 0; i < String(num).length; i++) {
            result += Number(String(num)[i]);
        }
        if (result / Number(String(num).length) > 5.00) {
            console.log(num);
            break;
        }
        num = String(num) + "9";
        num = Number(num);
    }
}