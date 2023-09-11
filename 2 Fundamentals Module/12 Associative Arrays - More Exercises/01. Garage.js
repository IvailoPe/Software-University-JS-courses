function main(input) {
    let garages = {}
    for (const iterator of input) {
        let garage = iterator.split(" - ");
        let garageNumber = garage[0]
        let carInfo = garage.slice(0)
        carInfo.shift()
        carInfo = carInfo[0]
        while (carInfo.includes(":")) {
            carInfo = carInfo.replace(":", " -")
        }
        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = []
            garages[garageNumber].push(carInfo)
        }
        else {
            garages[garageNumber].push(carInfo)
        }
    }
    for (const iterator in garages) {
        console.log(`Garage № ${iterator}`);
        garages[iterator].forEach(x => {
            console.log(`--- ${x}`);
        })
    }
}