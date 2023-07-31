/**
 * Calculates the sum of corresponding elements from an array of matrices.
 * Note: The function assumes all matrices have the same dimensions.
 *
 * @param {number[][][]} matrices - An array of matrices where each matrix is a 2D array of numbers.
 * @returns {number[]} An array containing the sum of corresponding elements from all matrices.
 */
function add2Matrix(matrices = []) {
  const result = [];
  for (let i = 0; i < matrices.length; i++) {
    for (let j = 0; j < matrices[i].length; j++) {
      if (i < matrices.length - 1) result[i + j] = matrices[i][j] + matrices[i + 1][j];
      else continue;
    }
  }
  return result;
}

module.exports = add2Matrix;
