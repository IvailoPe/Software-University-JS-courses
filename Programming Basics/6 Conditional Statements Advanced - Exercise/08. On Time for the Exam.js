function solve(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        console.log("Late");
        if (arrivalTime - examTime < 60) {
            console.log(`${arrivalTime - examTime} minutes after the start`);
        } else {
            let hours = Math.floor((arrivalTime - examTime) / 60);
            let minutes = (arrivalTime - examTime) % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours after the start`);
        }
    } else if (examTime - arrivalTime <= 30) {
        console.log("On time");
        if (examTime - arrivalTime > 0) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (examTime - arrivalTime < 60) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } else {
            let hours = Math.floor((examTime - arrivalTime) / 60);
            let minutes = (examTime - arrivalTime) % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours before the start`);
        }
    }
}