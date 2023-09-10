function main(number, group, day) {

    let result = 0;
    if (number >= 100 && group === "Business") {
        number = number - 10;
    }

    switch (day) {
        case "Friday":
            switch (group) {
                case "Students":
                    result = number * 8.45;
                    break;
                case "Business":
                    result = number * 10.90;
                    break;
                case "Regular":
                    result = number * 15;
                    break;
            }
            break;
        case "Saturday":
            switch (group) {
                case "Students":
                    result = number * 9.80;
                    break;
                case "Business":
                    result = number * 15.60;
                    break;
                case "Regular":
                    result = number * 20;
                    break;
            }
            break;
        case "Sunday":
            switch (group) {
                case "Students":
                    result = number * 10.46;
                    break;
                case "Business":
                    result = number * 16;
                    break;
                case "Regular":
                    result = number * 22.50;
                    break;
            }
            break;
    }
    if (number >= 30 && group === "Students") {
        result = result - (result * 0.15)
    }
    if (number >= 10 && number <= 20 && group == "Regular") {
        result = result - (result * 0.05)
    }

    console.log(`Total price: ${result.toFixed(2)}`);
}