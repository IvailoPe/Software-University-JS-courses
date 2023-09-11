function main(input) {
    let text = input.split("\\")[input.split("\\").length - 1]
    let secondText = text.split(".")
    let fileFormat = secondText.pop()
    let fileName
    if (secondText.length !== 1) {
        fileName = secondText.join(".")
    }
    else {
        fileName = secondText.join("")
    }
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileFormat}`);
}