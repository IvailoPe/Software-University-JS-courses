function main(input) {
    let index = 0
    let index2 = 2
    let place = ''
    let price = 0;
    let money = 0
    while (input[index] !== 'End') {
        if (isNaN(Number(input[index]))) {
            place = '';
            place = input[index]
            price = Number(input[index + 1])
        }
        while (place !== '') {
            money = money + Number(input[index2])
            index2++
            index++
            if (money >= price) {
                console.log(`Going to ${place}!`);
                place = ''
                money = 0;
                price = 0
                index2++
                index2++
            }
        }
        index++
    }
}