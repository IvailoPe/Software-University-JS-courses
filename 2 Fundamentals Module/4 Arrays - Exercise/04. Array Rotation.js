function main(arr, n) {
    for (let i = 0; i < n; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = temp
    }
    console.log(arr.join(" "));
}