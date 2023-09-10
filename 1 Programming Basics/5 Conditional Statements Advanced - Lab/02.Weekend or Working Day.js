function main(input) {
    let a = input[0]

    if (a === 'Sunday' || a === 'Saturday') {
        console.log(`Weekend`);
    }
    else if (a === 'Monday' || a === 'Tuesday' || a === 'Wednesday' || a === 'Friday' || a === 'Thursday') {
        console.log(`Working day`);
    }
    else {
        console.log(`Error`);
    }
}