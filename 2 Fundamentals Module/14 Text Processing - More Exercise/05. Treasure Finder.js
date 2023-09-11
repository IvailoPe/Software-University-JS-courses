function main(text) {
    let key = text[0].split(" ")
    let indexOfKeys = 0;
    let index = 1
    while (text[index] !== 'find') {
        indexOfKeys = 0
        let tex = text[index].split("")
        for (let i = 0; i < tex.length; i++) {
            if (indexOfKeys === key.length) {
                indexOfKeys = 0
            }
            tex.splice(i, 1, String.fromCharCode(tex[i].charCodeAt() - key[indexOfKeys]));
            indexOfKeys++;
        }
        let cordinates = tex.join("").split("<")[1].split("")
        cordinates.pop()
        cordinates = cordinates.join("")
        console.log(`Found ${tex.join("").split("&")[1]} at ${cordinates}`);
        index++;
    }
}