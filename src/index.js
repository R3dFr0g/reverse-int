module.exports = function reverse (n) {
  let stringFromNumber = Math.abs(n).toString();
  let result = stringFromNumber.split('').reverse().join('');
  return Number(result);
}
