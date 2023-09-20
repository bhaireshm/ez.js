// import arrayIntoChunks from "src/helpers/arrayIntoChunks";

// describe('arrayIntoChunks', () => {
//   // Returns an empty array when given an empty array and any value for n.
//   it('should return an empty array when given an empty array and any value for n', () => {
//     expect(arrayIntoChunks([], 3)).toEqual([]);
//     expect(arrayIntoChunks([], 0)).toEqual([]);
//     expect(arrayIntoChunks([], -1)).toEqual([]);
//   });

//   // Splits an array into subarrays of length 'n' when n is less than or equal to the length of the array.
//   it('should split an array into subarrays of length \'n\' when n is less than or equal to the length of the array', () => {
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2], [3, 4], [5, 6]]);
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], 6)).toEqual([[1, 2, 3, 4, 5, 6]]);
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], 7)).toEqual([[1, 2, 3, 4, 5, 6]]);
//   });

//   // Returns an empty array when given an empty array and n is less than or equal to 0.
//   it('should return an empty array when given an empty array and n is less than or equal to 0', () => {
//     expect(arrayIntoChunks([], -1)).toEqual([]);
//     expect(arrayIntoChunks([], 0)).toEqual([]);
//     expect(arrayIntoChunks([], -100)).toEqual([]);
//   });

//   // Returns an empty array when given an array and n is less than or equal to 0.
//   it('should return an empty array when given an array and n is less than or equal to 0', () => {
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], -1)).toEqual([]);
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], 0)).toEqual([]);
//     expect(arrayIntoChunks([1, 2, 3, 4, 5, 6], -100)).toEqual([]);
//   });
// });
