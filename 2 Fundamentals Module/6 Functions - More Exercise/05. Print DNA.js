function main(dna) {
    let dnaStorage = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let texts = ["**__**", "*_--_*", "_----_"];
    let counter = 0;
    let secondCounter = 0;
    let text
    let bool = true;
    for (let i = 0; i < dna; i++) {
        text = texts[counter].replace("_", dnaStorage[secondCounter]);
        text = text.replace("_", dnaStorage[secondCounter + 1]);
        console.log(text);
        if (bool) {
            counter++;
        }
        else if (bool == false) {
            counter--;
            if (counter == 0) {
                bool = true;
            }
        }
        secondCounter += 2;
        if (counter == 2) {
            bool = false;
        }

        if (secondCounter == 10) {
            secondCounter = 0;
        }
    }
}