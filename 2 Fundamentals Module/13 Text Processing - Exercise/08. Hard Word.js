function main(text) {
    let words = text[1]
    text = text[0].split(" ")
    for (let index = 0; index < text.length; index++) {
        if (text[index].includes("_")) {
            let length = text[index].length
            if (text[index][length - 1] !== '_') {
                length--
            }
            words.forEach(element => {
                if (element.length == length) {
                    text[index] = text[index].replace("_".repeat(length), element)
                }
            });
        }

    }
    console.log(text.join(" "));
}