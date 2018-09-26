'use strict'
function search(input, target) {
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

function sort(input) {
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

function generate(testLengthArray){
  var result = [];

  for (var i = 0; i < testLengthArray.length; i++) {
    var input = [];
    var size = testLengthArray[i];

    while (size > 0) {
      var randomInt = Math.floor(Math.random()*20000) - 10000;
      if (search(input, randomInt) == -1) {
        input.push(randomInt);
      size--;
      }
    }

    input = sort(input);

    var target;
    var output;
    if (i % 4 == 0) {
      target = input[0];
    }
    else if (i % 4 == 1) {
      target = input[testLengthArray[i]-1];
    }
    else if ( i % 4 == 2) {
      do { 
        target = Math.floor(Math.random()*20000) - 10000;
      } 
      while (search(input, target) != -1);
    }
    else {
      var randomIndex = Math.floor(Math.random() * ((testLengthArray[i] - 2) - 1 + 1)) + 1;
      target = input[randomIndex]; 
    }
    
    output = search(input, target);
    var testCase = {"input" : input, "target" : target, "output" : output};
    result.push(testCase);
  }

  return result;

}

module.exports = generate
