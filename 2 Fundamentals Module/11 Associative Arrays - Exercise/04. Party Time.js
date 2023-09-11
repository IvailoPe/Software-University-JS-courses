function main(input) {
    let vips = []
    let normal = []
    let index = 0
    while (input[index] !== 'PARTY') {
        if (!isNaN(input[index][0])) {
            vips.push(input[index])
        }
        else {
            normal.push(input[index])
        }
        index++
    }
    for (let i = index; i < input.length; i++) {
        if (vips.includes(input[i])) {
            let index = vips.indexOf(input[i])
            vips.splice(index, 1)
        }
        if (normal.includes(input[i])) {
            let index = normal.indexOf(input[i])
            normal.splice(index, 1)
        }

    }
    let arr = [...vips, ...normal]
    console.log(arr.length);
    console.log(arr.join("\n"));

}