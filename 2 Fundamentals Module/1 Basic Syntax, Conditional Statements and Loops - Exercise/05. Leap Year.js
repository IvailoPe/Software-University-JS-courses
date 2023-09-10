function main(year) {
    if (year % 400 === 0) {
        return "yes";
    }
    else if (year % 100 === 0) {
        return "no";
    }
    else if (year % 4 === 0) {
        return "yes";
    }

    return "no";
}