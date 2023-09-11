function printMatrix(matrix) {
    let mrx = '';
    for (let i = 0; i < matrix; i++) {
        mrx = ''
        for (let j = 0; j < matrix; j++) {
            mrx = mrx + matrix + " ";
        }
        console.log(mrx);
    }
}