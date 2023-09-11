function main(input) {
    let inventory = input.shift().split(" ")
    for (let index = 0; index < input.length; index++) {
        let command = input[index].split(" ")[0]
        let item
        switch (command) {
            case "Buy":
                item = input[index].split(" ")[1]
                if (!inventory.includes(item)) {
                    inventory.push(item)
                }
                break;
            case "Trash":
                item = input[index].split(" ")[1]
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item)
                    inventory.splice(indexOfItem, 1)
                }
                break;
            case "Repair":
                item = input[index].split(" ")[1]
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item)
                    inventory.splice(indexOfItem, 1)
                    inventory.push(item)
                }
                break;
            case "Upgrade":
                let items = input[index].split(" ")[1].split("-")
                if (inventory.includes(items[0])) {
                    let indexOfItem = inventory.indexOf(items[0])
                    inventory.splice(indexOfItem + 1, 0, `${items[0]}:${items[1]}`)
                }
                break;
        }

    }
    console.log(inventory.join(" "));
}