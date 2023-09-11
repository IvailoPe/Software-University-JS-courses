function main(input, settings) {
    let counter = 0;
    let newArr = input.slice(0, settings[0]);
    newArr.splice(0, settings[1]);
    for (let num of newArr) {
        if (num === settings[2]) {
            counter++;
        }
    }
    console.log(`Number ${settings[2]} occurs ${counter} times.`);
}