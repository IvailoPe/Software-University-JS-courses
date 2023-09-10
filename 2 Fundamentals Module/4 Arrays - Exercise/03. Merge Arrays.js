function main(arr, array) {
    let ar = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            ar[i] = Number(arr[i]) + Number(array[i])
        }
        else {
            ar[i] = arr[i] + array[i]
        }

    }
    console.log(ar.join(" - "));
}