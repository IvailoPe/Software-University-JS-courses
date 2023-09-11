function main(input, secondInput) {
    let words = input.split(", ")
    let sentence = secondInput.split(" ")
    for (let index = 0; index < sentence.length; index++) {
        if (sentence[index].includes("*")) {
            let length = sentence[index].length
            words.forEach((element) => {
                if (element.length === length) {
                    sentence[index] = sentence[index].replace("*".repeat(length), element)
                }
            })
        }
    }
    console.log(sentence.join(" "));
}