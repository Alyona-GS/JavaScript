function compareNumbers(a, b) {
  return b - a;
}

const sortDesc = function(numbers) {
  return numbers.sort(compareNumbers)
}