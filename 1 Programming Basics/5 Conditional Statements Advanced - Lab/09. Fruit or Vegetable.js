function main(input) {
    let b = input[0]

    if (b === 'banana' || b === 'apple' || b === 'kiwi' || b === 'cherry' || b === 'lemon' || b === 'grapes') {
        console.log(`fruit`);
    }
    else if (b === 'tomato' || b === 'cucumber' || b === 'pepper' || b === 'carrot') {
        console.log(`vegetable`);
    }
    else {
        console.log(`unknown`);
    }
}