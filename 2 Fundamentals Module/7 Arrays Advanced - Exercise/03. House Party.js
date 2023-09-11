function main(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].split(" ")[2] !== "not") {
            if (newArr.includes(input[i].split(" ")[0]) === false) {
                newArr.push(input[i].split(" ")[0])
            } else {
                console.log(`${input[i].split(" ")[0]} is already in the list!`);
            }
        } else {
            if (newArr.includes(input[i].split(" ")[0]) === false) {
                console.log(`${input[i].split(" ")[0]} is not in the list!`);
            }
            else {
                let index = newArr.indexOf(input[i].split(" ")[0]);
                newArr.splice(index, 1)
            }
        }
    }
    console.log(newArr.join("\n"));
}