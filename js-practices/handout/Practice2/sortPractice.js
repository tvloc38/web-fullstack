'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  var n = input.length, key, j, i;
  for (i = 1; i < n; i++) {
    key = input[i];
    j = i - 1;
    while (j > -1 && input[j] > key) {
      input[j + 1] = input[j];
      j = j - 1;
    }
    input[j + 1] = key;
  }
  return input;
}

module.exports = sort
