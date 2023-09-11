function main(input) {
    let materials = {}
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            if (!materials.hasOwnProperty(input[i])) {
                materials[input[i]] = 0;
            }
        }
        else {
            materials[input[i - 1]] += Number(input[i])
        }
    }
    for (const key in materials) {
        console.log(`${key} -> ${materials[key]}`);
    }
}