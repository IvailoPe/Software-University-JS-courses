function main(input) {
    let sentence = input.split(" ")
    let arr = []
    for (let iterator of sentence) {
        if (iterator.includes("#")) {
            let bool = true
            for (let index = 0; index < iterator.length; index++) {
                if (!isNaN(iterator[index])) {
                    bool = false;
                }
            }
            if (bool) {
                iterator = iterator.replace("#", "")
                if (!iterator.length == 0) {
                    arr.push(iterator)
                }
            }
        }
    }
    console.log(arr.join("\n"));
}