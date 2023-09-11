function main(input) {
    input.sort(function (a, b) {
        if (a.length - b.length !== 0) {
            return a.length - b.length
        }
        else {
            return a.localeCompare(b)
        }
    })
    console.log(input.join("\n"));
}