function main(num1, num2, num3, num4, num5) {
    let price = 0;
    let counter = 0;
    let secCounter = 0;
    let thiCouner = 0;
    let helBool = false;
    let swoBool = false;
    for (let i = 0; i < num1; i++) {
        secCounter++;
        counter++;
        if (counter == 2) {
            price += num2;
            counter = 0;
            helBool = true;
        }
        if (secCounter == 3) {
            price += num3;
            secCounter = 0;
            swoBool = true;
        }
        if (helBool && swoBool) {
            thiCouner++;
            price += num4
            if (thiCouner == 2) {
                price += num5;
                thiCouner = 0;
            }
        }
        helBool = false;
        swoBool = false;
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}