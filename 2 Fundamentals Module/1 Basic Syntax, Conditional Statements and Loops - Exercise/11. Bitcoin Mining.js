function main(array) {
    let money = 0;
    let bitcoins = 0;
    let counter = 1;
    let secCounter = 0;
    let gold = 0;
    let bool = true;
    for (let i = 0; i < array.length; i++) {
        if (counter == 3) {
            array[i] = array[i] - (array[i] * 0.30)
            counter = 1
        }
        else {
            counter++;
        }
        money = money + (array[i] * 67.51);
        while (money >= 11949.16) {
            money = money - 11949.16;
            bitcoins++;
            if (bool) {
                secCounter = i + 1;
                bool = false
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (secCounter != 0) {
        console.log(`Day of the first purchased bitcoin: ${secCounter}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}