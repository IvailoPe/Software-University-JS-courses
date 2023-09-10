function main(arr, array) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (arr[i] === array[j])
                console.log(arr[i]);
        }
    }
}