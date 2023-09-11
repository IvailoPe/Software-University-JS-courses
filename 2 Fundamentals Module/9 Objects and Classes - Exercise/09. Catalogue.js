function main(input) {
    let arrOfObjc = []
    for (let i = 0; i < input.length; i++) {
        let key = input[i].split(" : ")[0];
        let value = input[i].split(" : ")[1]
        arrOfObjc[i] = {
            [key]: value
        }
    }
    let char;
    arrOfObjc.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
    for (let iterator of arrOfObjc) {
        if (Object.keys(iterator)[0][0] !== char) {
            char = Object.keys(iterator)[0][0]
            console.log(char);
        }
        for (let [key, value] of Object.entries(iterator)) {
            console.log(`  ${key}: ${value}`);
        }
    }
}