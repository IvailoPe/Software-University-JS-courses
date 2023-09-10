function main(input) {
    let figure = input[0];
    let num = Number(input[1]);
    let num2 = Number(input[2]);

    let result;

    if (figure === 'square') {
        result = num * num;
        console.log(result.toFixed(3));
    }
    else if (figure === 'rectangle') {
        result = num * num2;
        console.log(result.toFixed(3));
    }
    else if (figure === 'circle') {
        result = Math.PI * Math.pow(num, 2);
        console.log(result.toFixed(3));
    }
    else if (figure === 'triangle') {
        result = (num * num2) / 2;
        console.log(result.toFixed(3));
    }

}
