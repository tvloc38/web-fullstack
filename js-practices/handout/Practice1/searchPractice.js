'use strict'

function search(input, target) {
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
  var n = input.length;
  var result = -1;
  for(var i = 0; i < n; i++) {
    if (input[i] == target) {
      result = i;
      break;
    }

    if (input[i] > target) {
      break;
    }
  }
  return result;
}

module.exports = search
