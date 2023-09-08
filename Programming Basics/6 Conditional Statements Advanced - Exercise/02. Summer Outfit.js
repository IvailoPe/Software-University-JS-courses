function main(input) {
    let a = Number(input[0])
    let c = input[1]

    let shoes;
    let outfit;

    if (a >= 10 && a <= 18) {
        switch (c) {
            case 'Morning':
                outfit = 'Sweatshirt'
                shoes = 'Sneakers'
                break;
            case 'Afternoon':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break;
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break;
        }
    }
    else if (a > 18 && a <= 24) {
        switch (c) {
            case 'Morning':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break;
            case 'Afternoon':
                outfit = 'T-Shirt'
                shoes = 'Sandals'
                break;
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break;
        }
    }
    else if (a >= 25) {
        switch (c) {
            case 'Morning':
                outfit = 'T-Shirt'
                shoes = 'Sandals'
                break;
            case 'Afternoon':
                outfit = 'Swim Suit'
                shoes = 'Barefoot'
                break;
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break;
        }
    }
    console.log(`It's ${a} degrees, get your ${outfit} and ${shoes}.`);
}