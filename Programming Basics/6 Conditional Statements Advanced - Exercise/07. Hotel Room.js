function main(input) {

    let c = input[0]
    let a = Number(input[1])
    
    let k = a;
    let studio;
    let apartament;
    let discount = 0;
    let apadiscount = 0;

    if (c === 'May' || c === 'October') {
        if (a > 7 && a < 14) {
            discount = 0.05
            studio = a * (50 - ((50 * discount)))
        }
        else if (a > 14) {
            discount = 0.30
            studio = a * (50 - ((50 * discount)))
        }

        if (k > 14) {
            apadiscount = 0.10
            apartament = a * (65 - ((65 * apadiscount)))
        }
        if (discount === 0) {
            studio = a * 50;
        }
        if (apadiscount === 0) {
            apartament = a * 65;
        }
    }
    else if (c === 'June' || c === 'September') {
        if (a > 14) {
            discount = 0.20
            studio = a * (75.20 - ((75.20 * discount)))
        }

        if (k > 14) {
            apadiscount = 0.10
            apartament = a * (68.70 - ((68.70 * apadiscount)))
        }
        if (discount === 0) {
            studio = a * 75.20;
        }

        if (apadiscount === 0) {
            apartament = a * 68.70;
        }
    }
    else if (c === 'July' || c === 'August') {
        if (k > 14) {
            apadiscount = 0.10
            apartament = a * (77 - ((77 * apadiscount)))
        }
        if (discount === 0) {
            studio = a * 76;
        }

        if (apadiscount === 0) {
            apartament = a * 77;
        }
    }
    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}