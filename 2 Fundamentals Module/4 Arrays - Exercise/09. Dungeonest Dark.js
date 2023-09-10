function main(input) {
    let rooms = input[0].split("|")
    let health = 100;
    let coins = 0;
    for (let index = 0; index < rooms.length; index++) {
        if (rooms[index].split(" ")[0] === "potion") {
            let healthFor
            if (health + Number(rooms[index].split(" ")[1]) > 100) {
                healthFor = 100 - health
                health = 100
            }
            else {
                health += Number(rooms[index].split(" ")[1])
                healthFor = Number(rooms[index].split(" ")[1])
            }
            console.log(`You healed for ${healthFor} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (rooms[index].split(" ")[0] === "chest") {
            coins += Number(rooms[index].split(" ")[1])
            console.log(`You found ${rooms[index].split(" ")[1]} coins.`);
        }
        else {
            health -= Number(rooms[index].split(" ")[1])
            if (health > 0) {
                console.log(`You slayed ${rooms[index].split(" ")[0]}.`);
            }
            else {
                console.log(`You died! Killed by ${rooms[index].split(" ")[0]}.`);
                console.log(`Best room: ${index + 1}`);
                return
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

main(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])