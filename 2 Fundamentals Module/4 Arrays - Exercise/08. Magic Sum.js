function main(arr, n) {
    let temp
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (temp + arr[j] === n) {
                console.log(temp + " " + arr[j]);
            }
        }
    }
}