const compareArray = function(a, b) {
  for(let i = 0; i < a.length ; i++) {
    a[i] = a[i] > b[i];
  };

  return a
};