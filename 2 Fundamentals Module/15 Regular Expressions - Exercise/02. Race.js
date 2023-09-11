function main(input) {
    let index = 1;
    let participants = {}
    let names = input[0]
    names = names.split(", ")
    for (const iterator of names) {
        participants[iterator] = 0
    }
    while (input[index] !== 'end of race') {
        let str = '';
        let number = 0;
        for (let i = 0; i < input[index].length; i++) {
            let test = input[index][i].charCodeAt()
            let secondTest = input[index][i]
            if ((test >= 65 && test <= 90) || (test >= 97 && test <= 122)) {
                str += input[index][i]
            }
            if (!isNaN(secondTest)) {
                number += Number(secondTest)
            }
        }
        if (participants.hasOwnProperty(str)) {
            participants[str] += number
        }
        index++
    }
    let arr = []
    arr.push(...Object.entries(participants))
    arr.sort((a, b) => {
        return b[1] - a[1]
    })
    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`);
    console.log(`3rd place: ${arr[2][0]}`);
}