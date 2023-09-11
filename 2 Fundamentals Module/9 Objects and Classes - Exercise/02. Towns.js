function main(input) {
    for (let i = 0; i < input.length; i++) {
        let towns = {
            town: input[i].split(" | ")[0],
            latitude: Number(input[i].split(" | ")[1]).toFixed(2),
            longitude: Number(input[i].split(" | ")[2]).toFixed(2)
        }
        console.log(towns);
    }
} 