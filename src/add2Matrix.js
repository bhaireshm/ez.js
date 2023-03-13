function add2Matrix(matrices) {
    const result = [];
    for (let i = 0; i < matrices.length; i++) {
        for (let j = 0; j < matrices[i].length; j++) {
            if (i < matrices.length - 1)
                result[i + j] = matrices[i][j] + matrices[i + 1][j];
            else continue;
        }
    }
    return result;
}

// console.log(add2Matrix([[1, 2, 3], [4, 5, 6]]));

module.exports = add2Matrix;