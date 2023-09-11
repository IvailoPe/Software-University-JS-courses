function sumOfEvenAndOdd(number) {
    let even = 0;
    let odd = 0;
    let numberInString = String(number);
    for (let i = 0; i < numberInString.length; i++) {
        if (Number(numberInString[i]) % 2 == 0) {
            even += Number(numberInString[i]);
        }
        else {
            odd += Number(numberInString[i]);
        }
    }
    return console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}