function main(arr) {
    let text = "";
    let intToCheck = 0;
    let bool = false;
    for (let i = 0; i < arr.length; i++) {
        intToCheck = arr[i];
        bool = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (intToCheck > arr[j]) {
                bool = true;
            } else {
                bool = false
                break;
            }

        }
        if (bool == true) {
            text = text + intToCheck + " "
        }

    }
    console.log(text + arr[arr.length - 1]);
}