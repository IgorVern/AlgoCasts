// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n) {
  // my own
  const row = [];
  for (let i = 0; i < (1 + 2 * (n - 1)); i++) {
    row.push(' ');
  }

  const center = Math.ceil(row.length / 2) - 1;
  row[center] = '#';

  console.log(row.join(''));

  for (let i = 1; i <= center; i++) {
    row[center + i] = '#';
    row[center - i] = '#';
    console.log(row.join(''));
  }
}

module.exports = pyramid;
