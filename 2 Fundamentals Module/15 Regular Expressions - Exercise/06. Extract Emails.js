function main(input) {
    let pattern = / [A-Za-z0-9][a-zA-Z0-9.\-_]*[A-Za-z0-9]*@[A-Za-z][a-zA-Z\.\-]+(\.|\-)[A-Za-z]+/g;
    let match = pattern.exec(input)
    while (match !== null) {
        console.log(match[0]);
        match = pattern.exec(input)
    }
}