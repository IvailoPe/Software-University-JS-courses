function printLoadingBar(num) {
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
        return
    }
    else {
        let number = num / 10;
        let result = '[..........]';
        for (let i = 0; i < number % 10; i++) {
            result = result.replace(".", "%");
        }
        console.log(`${num}% ${result}`);
        console.log(`Still loading...`);
    }
}