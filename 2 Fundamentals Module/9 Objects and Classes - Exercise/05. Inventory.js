function main(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        arr[i] = {
            Hero: input[i].split(" / ")[0],
            level: input[i].split(" / ")[1],
            items: input[i].split(" / ").slice(2)
        }
    }
    arr.sort((object1, object2) => {
        return object1["level"] - object2["level"];
    })
    for (const iterator of arr) {
        for (const [key, value] of Object.entries(iterator)) {
            if (key === "Hero") {
                console.log(`Hero: ${value}`);
            }
            else if (key === 'level') {
                console.log(`level => ${value}`);
            }
            else {
                console.log(`items => ${value}`);
            }
        }
    }
}