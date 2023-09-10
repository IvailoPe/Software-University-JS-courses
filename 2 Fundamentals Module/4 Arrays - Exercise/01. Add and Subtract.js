function main(arr) {
    let array = [];
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < arr.length; i++) {
        firstSum += arr[i];
        if (arr[i] % 2 == 0) {
            array[i] = arr[i] + i;
            secondSum += array[i]
        }
        else {
            array[i] = arr[i] - i;
            secondSum += array[i];
        }
    }
    console.log(array);
    console.log(firstSum);
    console.log(secondSum);
}