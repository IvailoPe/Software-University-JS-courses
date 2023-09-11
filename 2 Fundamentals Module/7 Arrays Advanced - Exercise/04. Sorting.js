function main(input) {
    let arr = [];
    if (input.length === 1) {
        console.log(input[0]);
        return
    }
    while (input.length !== 0) {
        if (input.length === 1) {
            arr.push(input);
            break;
        }
        let max = Math.max(...input);
        let indexOfMax = input.indexOf(max);
        input.splice(indexOfMax, 1);
        let min = Math.min(...input);
        let indexOfMin = input.indexOf(min);
        input.splice(indexOfMin, 1);
        arr.push(max, min);
    }
    console.log(arr.join(" "));
}