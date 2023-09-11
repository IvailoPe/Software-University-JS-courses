function main(input) {
    let listOfEmployes = {}
    let str = "name";
    for (let i = 0; i < input.length; i++) {
        listOfEmployes[input[i]] = input[i].length
    }
    for (const [key, value] of Object.entries(listOfEmployes)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
} 
