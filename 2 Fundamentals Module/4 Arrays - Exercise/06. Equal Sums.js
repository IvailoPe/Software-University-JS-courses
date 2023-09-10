function main(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let is = false;
    let arraylen = arr.length;
    for (let currentindex = 0; currentindex < arraylen; currentindex++) {
        for (let i = 0; i < arraylen; i++) {
            if (i !== currentindex) {
                let num = Number(arr[i])
                if (i < currentindex) {
                    leftSum += num
                }
                else if (i > currentindex) {
                    rightSum += num;
                }
            }
        }
        if (currentindex === 0) {
            leftSum = 0;
        }
        else if (currentindex === arraylen - 1) {
            rightSum = 0;
        }
        if (leftSum === rightSum) {
            console.log(currentindex);
            is = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!is) {
        console.log("no");
    }
}