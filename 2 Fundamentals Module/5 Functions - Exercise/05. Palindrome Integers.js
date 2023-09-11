function sumOfEvenAndOdd(number) {
    let numInText = [];
    for (let i = 0; i < number.length; i++) {
        numInText[0] = String(number[i]).split("");
        numInText[0].reverse();
        if (numInText[0].join("") === String(number[i])) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}