function main(input) {
    let a = input[0]
    let b;

    switch (a) {
        case 'dog': b = 'mammal'; break;
        case 'snake':
        case 'crocodile':
        case 'tortoise': b = 'reptile'; break;
        default: b = 'unknown'; break;
    }
    console.log(b);
}