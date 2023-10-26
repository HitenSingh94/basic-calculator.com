var output = document.getElementById("output");

function appendToOutput(value) {
  output.value += value;
}

function clearOutput() {
  output.value = "";
}

function calculate() {
  var result = eval(output.value);
  output.value = result;
}
