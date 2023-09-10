function main(char) {
    let num = char.charCodeAt()
    if (num >= 65 && num <= 90) {
        console.log("upper-case");
    }
    else {
        console.log("lower-case");
    }
}