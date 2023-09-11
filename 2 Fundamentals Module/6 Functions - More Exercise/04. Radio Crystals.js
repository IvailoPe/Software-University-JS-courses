function main(crystals) {
    let ticknes = crystals[0];
    let currentTickens = crystals[1];
    let counter = 0;
    for (let i = 1; i <= crystals.length - 1; i++) {
        console.log(`Processing chunk ${currentTickens} microns`);
        while (currentTickens != ticknes) {
            counter = 0;
            while (currentTickens / 4 >= ticknes) {
                currentTickens /= 4;
                counter++;
            }
            if (counter > 0) {
                console.log(`Cut x${counter}`)
                console.log(`Transporting and washing`)
                currentTickens = Math.floor(currentTickens)
            }
            counter = 0;
            while (currentTickens - (currentTickens * 0.20) >= ticknes) {
                currentTickens -= (currentTickens * 0.20);
                counter++;
            }
            if (counter > 0) {
                console.log(`Lap x${counter}`);
                console.log(`Transporting and washing`)
                currentTickens = Math.floor(currentTickens)
            }
            counter = 0;
            while (currentTickens - 20 >= ticknes) {
                currentTickens -= 20;
                counter++;
            }
            if (counter > 0) {
                console.log(`Grind x${counter}`);
                console.log(`Transporting and washing`)
                currentTickens = Math.floor(currentTickens)
            }
            counter = 0;
            while (currentTickens > ticknes) {
                currentTickens -= 2;
                counter++;
            }
            if (counter > 0) {
                console.log(`Etch x${counter}`);
                console.log(`Transporting and washing`)
                currentTickens = Math.floor(currentTickens)
            }
            counter = 0;
            while (currentTickens < ticknes) {
                currentTickens++;
                counter++;
            }
            if (counter > 0) {
                console.log(`X-ray x${counter}`);
                currentTickens = Math.floor(currentTickens)
            }
        }
        currentTickens = crystals[i + 1]
        console.log(`Finished crystal ${crystals[0]} microns`);
    }
}