const filterByLength = function(arr, left, right) {
  return arr.filter(item => item.length >= left &&
                            item.length <= right);
};