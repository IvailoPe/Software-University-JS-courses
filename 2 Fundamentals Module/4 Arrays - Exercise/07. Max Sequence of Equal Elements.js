function main(arr) {
    let seque = 1;
    let maxSeque = 0;
    let maxSequeNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currentNumber = Number(arr[i]);
            let prevNumber = Number(arr[i - 1]);
            if (currentNumber === prevNumber) {
                seque++;
                if (seque > maxSeque) {
                    maxSeque = seque;
                    maxSequeNum = currentNumber
                }
            } else {
                seque = 1;
            }
        }
    }
    console.log(`${(maxSequeNum + " ").repeat(maxSeque)}`);
}