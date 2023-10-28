// Soal 1

// const input = 'SUTNAUQ3';
// let output = '';

// for (let i = input.length - 1; i >= 0; i--) {
//   output += input[i];
// }

// console.log('input :', input);
// console.log('output :', output);

// Soal 2

// const input =
//   'Saya sangat senang mengerjakan soal algoritma dari PT. Quantus Telematika';

// let output = input.split(' ')
//   .reduce(
//     (longestWord, currentWord) =>
//       longestWord.length > currentWord.length ? longestWord : currentWord,
//     ''
//   );

// console.log('input :', input);
// console.log('output :', `${output} (${output.length})`);

// Soal 3

// const input = '76529752';

// let output = Array.from(input).filter(
//   (value, _index, arr) => arr.filter((val) => val === value).length === 1
// );

// console.log('input :', input);
// console.log('output :', output);

// Soal 4

// const INPUT = ['xc', 'dz', 'bbb', 'dz'];
// const QUERY = ['bbb', 'ac', 'dz'];

// const output = QUERY.map(
//   (queryItem) => INPUT.filter((filterItem) => filterItem === queryItem).length
// );

// console.log('input :', INPUT);
// console.log('query :', QUERY);
// console.log('output :', output);
