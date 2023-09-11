function main(input) {
    let flightStatuses = input[0];
    let newStatuses = input[1];
    let finalCommand = input[2];
    let flights = {};
    for (let flight of flightStatuses) {
        let temp1 = flight.split(" ")[0]
        flights[flight.split(" ")[0]] = flight.split(`${temp1} `)[1]
    }
    for (let status of newStatuses) {
        if (flights[status.split(" ")[0]]) {
            flights[status.split(" ")[0]] = 'Cancelled';
        }
    }
    let newObj = {}
    if (finalCommand == 'Ready to fly') {
        for (let key in flights) {
            if (flights[key] !== 'Cancelled') {
                let temp = flights[key]
                newObj[temp] = 'Ready to fly'
                console.log(`{ Destination: '${temp}', Status: '${newObj[temp]}' } `)
            }
        }
    }
    else {
        for (let key in flights) {
            if (flights[key] === 'Cancelled') {
                let temp
                flightStatuses.forEach(element => {
                    if (element.split(" ")[0] === key) {
                        temp = element.split(" ")[1]
                    }
                });
                console.log(`{ Destination: '${temp}', Status: 'Cancelled' }`);
            }
        }
    }
}