
isDivBlue = true;

function changeDiv() {

  console.log("This will be printed to console");

  var div = document.getElementById('mydiv');

  isDivBlue = !isDivBlue;

  div.style.backgroundColor = "green";

  if (isDivBlue) {
    div.style.backgroundColor = "blue";
  }
}



