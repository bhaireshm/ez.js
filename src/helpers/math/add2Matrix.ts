/**
 * Calculates the sum of corresponding elements from an array of matrices.
 * Note: The function assumes all matrices have the same dimensions.
 *
 * @param {number[][][]} matrices - An array of matrices where each matrix is a 2D array of numbers.
 * @returns {number[]} An array containing the sum of corresponding elements from all matrices.
 */
export default function add2Matrix(matrices: number[][][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < matrices.length; i++) {
    for (let j = 0; j < matrices[i].length; j++) {
      if (i < matrices.length - 1) {
        if (!result[i + j]) result[i + j] = [];
        result[i + j][j] = (result[i + j][j] || 0) + matrices[i][j][j];
      } else {
        continue;
      }
    }
  }

  return result;
}
