function sumDigits(n) {
    let sum = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}