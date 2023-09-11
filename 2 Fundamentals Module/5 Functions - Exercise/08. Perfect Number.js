function perfectNumber(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += i;
        }
        if (result == num) {
            console.log("We have a perfect number!");
            break;
        }
        if (result > num) {
            console.log("It's not so perfect.");
            break;
        }
    }
}