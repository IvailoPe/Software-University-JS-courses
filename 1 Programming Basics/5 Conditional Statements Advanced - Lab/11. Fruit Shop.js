function main(input) {
    let c = input[0]
    let b = input[1]
    let a = Number(input[2])

    if (b === 'Monday' || b === 'Tuesday' || b === 'Wednesday' || b === 'Thursday' || b === 'Friday') {
        switch (c) {
            case 'banana': a = a * 2.50; console.log(a.toFixed(2)); break;
            case 'apple': a = a * 1.20; console.log(a.toFixed(2)); break;
            case 'orange': a = a * 0.85; console.log(a.toFixed(2)); break;
            case 'grapefruit': a = a * 1.45; console.log(a.toFixed(2)); break;
            case 'kiwi': a = a * 2.70; console.log(a.toFixed(2)); break;
            case 'pineapple': a = a * 5.50; console.log(a.toFixed(2)); break;
            case 'grapes': a = a * 3.85; console.log(a.toFixed(2)); break;
            default: console.log(`error`);

        }
    } else if (b === 'Saturday' || b === 'Sunday') {
        switch (c) {
            case 'banana': a = a * 2.70; console.log(a.toFixed(2)); break;
            case 'apple': a = a * 1.25; console.log(a.toFixed(2)); break;
            case 'orange': a = a * 0.90; console.log(a.toFixed(2)); break;
            case 'grapefruit': a = a * 1.60; console.log(a.toFixed(2)); break;
            case 'kiwi': a = a * 3.00; console.log(a.toFixed(2)); break;
            case 'pineapple': a = a * 5.60; console.log(a.toFixed(2)); break;
            case 'grapes': a = a * 4.20; console.log(a.toFixed(2)); break;
            default: console.log(`error`);
        }
    } else {
        console.log(`error`);
    }
}
