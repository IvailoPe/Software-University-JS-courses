function main(input) {
    let b = input[0]
    let c = input[1]
    let a = Number(input[2])

    if (c === 'Sofia') {
        switch (b) {
            case 'coffee': a = a * 0.50; break;
            case 'water': a = a * 0.80; break;
            case 'beer': a = a * 1.20; break;
            case 'sweets': a = a * 1.45; break;
            case 'peanuts': a = a * 1.60; break;
        }
    }
    else if (c === 'Plovdiv') {
        switch (b) {
            case 'coffee': a = a * 0.40; break;
            case 'water': a = a * 0.70; break;
            case 'beer': a = a * 1.15; break;
            case 'sweets': a = a * 1.30; break;
            case 'peanuts': a = a * 1.50; break;
        }
    }
    else if (c === 'Varna') {
        switch (b) {
            case 'coffee': a = a * 0.45; break;
            case 'water': a = a * 0.70; break;
            case 'beer': a = a * 1.10; break;
            case 'sweets': a = a * 1.35; break;
            case 'peanuts': a = a * 1.55; break;
        }
    }
    console.log(a);
}