const nestedList = ["Item", ["Item2", ["Item3"]]];

function nested_arrays(arr) {

  var last_list = document.createElement('ul');
  document.body.append(last_list);
  rec_func(arr, last_list);
};

function rec_func(arr, list) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] instanceof Array) {

        new_list = list.cloneNode();
        list.append(new_list);
        rec_func(arr[i], new_list);

    } else {
      
        element = document.createElement('li');
        element.textContent = arr[i];
        list.append(element);
    }
  }
}