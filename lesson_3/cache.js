function cache() {

  var answers = {};

  function pow(...arg) {
    var fromCache = true;

    arg_str = arg.join(",");

    if (!answers[arg_str]) {
      answers[arg_str] = arg[0]**arg[1];
      fromCache = false;
    }

    return { "value": answers[arg_str], "fromCache": fromCache }
  }

  return pow
}