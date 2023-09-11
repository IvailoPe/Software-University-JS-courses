function main(input) {
    let wagons = input[0].split(" ");
    let maxCapacity = input[1];
    for (let i = 2; i < input.length; i++) {
        if ((input[i].split(" "))[0] === "Add") {
            wagons.push((input[i].split(" "))[1])
        }
        else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(wagons[j]) + Number(input[i]) <= Number(maxCapacity)) {
                    wagons[j] = Number(wagons[j]) + Number(input[i])
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}