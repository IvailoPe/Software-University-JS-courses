function main(input) {
    let index = 0;
    let movie = ' '
    let checkIfNumber = true;
    let seats = 0
    let standartTickets = 0;
    let studentTickets = 0;
    let studentKid = 0;
    let allTickets = 0;
    let totalTickets = 0;
    let totaStandart = 0;
    let totalStudent = 0;
    let totalKid = 0;
    while (input[index] !== 'Finish') {
        if (input[index] !== 'standard' && input[index] !== 'student' && input[index] !== 'kid') {
            if (isNaN(Number(input[index]))) {
                checkIfNumber = false
            } else {
                checkIfNumber = true
                seats = Number(input[index]);
                console.log(seats);
                index++
            }
            if (checkIfNumber === true) {
                continue;
            } else {
                movie = input[index]
                if (movie === 'End') {
                    index++
                    continue
                }
            }
        }
        index++
        seats = Number(input[index]);
        index++
        while (input[index] === 'standard' || input[index] === 'student' || input[index] === 'kid') {
            if (input[index] === 'standard') {
                totaStandart++
                standartTickets++
                allTickets++
                totalTickets++
                if (allTickets >= seats) {
                    break;
                }
                index++
            }
            else if (input[index] === 'student') {
                totalStudent++
                studentTickets++
                allTickets++
                totalTickets++
                if (allTickets >= seats) {
                    break;
                }
                index++
            }
            else if (input[index] === 'kid') {
                totalKid++
                studentKid++
                allTickets++
                totalTickets++
                if (allTickets >= seats) {
                    break;
                }
                index++
            }
        }
        if (movie === ' ') {
            continue
        }
        console.log(`${movie} - ${((allTickets / seats) * 100).toFixed(2)}% full.`);
        if (input[index] === 'Finish' || input[index + 1] === 'Finish') {
            console.log(`Total tickets: ${totalTickets}`);
            console.log(`${((totalStudent / totalTickets) * 100).toFixed(2)}% student tickets.`);
            console.log(`${((totaStandart / totalTickets) * 100).toFixed(2)}% standard tickets.`);
            console.log(`${((totalKid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
        }
        if (input[index] === 'Finish') {
            break;
        }
        movie = ' '
        standartTickets = 0
        studentTickets = 0
        studentKid = 0
        allTickets = 0
        index++
    }
}