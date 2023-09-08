function main(input) {
    let index = 0;
    let result = 0
    while (input[index]) {
        if (input[index] === 'Going home') {
            result = result + Number(input[index + 1])
            if (result >= 10000) {
                console.log(`Goal reached! Good job!`);
                console.log(`${result - 10000} steps over the goal!`);
                return
            } else {
                console.log(`${10000 - result} more steps to reach goal.`);
                return
            }

        }
        result = result + Number(input[index])
        index++;
    }
    if (result >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${result - 10000} steps over the goal!`);
        return
    } else {
        console.log(`${10000 - result} more steps to reach goal.`);
        return
    }
}