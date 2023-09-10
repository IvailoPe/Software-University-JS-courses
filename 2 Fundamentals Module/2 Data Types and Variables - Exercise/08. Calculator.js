function main(num, operator, numb) {
    switch (operator) {
        case "+": console.log((num + numb).toFixed(2))
            break;
        case "-": console.log((num - numb).toFixed(2))
            break;
        case "*": console.log((num * numb).toFixed(2))
            break;
        case "/": console.log((num / numb).toFixed(2))
    }
}