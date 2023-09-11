function main(input, settings) {
    for (let i = 0; i < settings.length; i++) {
        switch (settings[i].split(" ")[0]) {
            case "add":
                input.splice(settings[i].split(" ")[1], 0, Number(settings[i].split(" ")[2]))
                break;
            case "addMany":
                let numbers = settings[i].split(" ");
                numbers = numbers.map(x => Number(x))
                numbers.shift();
                numbers.shift();
                input.splice(settings[i].split(" ")[1], 0, ...numbers)
                break;
            case "contains":
                if (input.includes(Number(settings[i].split(" ")[1]))) {
                    console.log(input.indexOf(Number(settings[i].split(" ")[1])));
                } else {
                    console.log(-1);
                }
                break;
            case "remove":
                input.splice(settings[i].split(" ")[1], 1);
                break;
            case "shift":
                for (let j = 0; j < settings[i].split(" ")[1]; j++) {
                    input.push(input[0]);
                    input.shift()
                }
                break;
            case "sumPairs":
                let newArr = []
                let counter = 0;
                let sum = 0;
                for (let g = 0; g <= input.length; g++) {
                    if (counter === 2) {
                        newArr.push(sum)
                        counter = 0;
                        sum = 0;
                    }
                    else if (g === input.length) {
                        newArr.push(input[g - 1])
                    }
                    counter++
                    sum += input[g]
                }
                input = newArr
                break;
            case "print":
                console.log("[ " + input.join(", ") + " ]");
                return
        }
    }
}