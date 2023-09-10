function main(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let c = Number(input[2])
    let tmp = a * b * c
    let tmp2 = 0;
    let index = 3;
    let length = input.length
    length = length - 3
    while (length) {
        if (input[index] === 'Done' && tmp > tmp2) {
            console.log(`${tmp - tmp2} Cubic meters left.`);
            return
        }
        tmp2 = tmp2 + Number(input[index])
        if (tmp2 > tmp) {
            console.log(`No more free space! You need ${tmp2 - tmp} Cubic meters more.`);
            return
        }
        length--;
        index++;
    }
}