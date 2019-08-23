var gameMarker = "X";

function changeMarkerToX() {
  gameMarker = "X";
  console.log("The x button was clicked!");
}

function changeMarkerToO() {
  gameMarker = "O";
  console.log("The o button was clicked!");
}

function placeMark() {
  document.getElementsByTagName("div").innerHTML = gameMarker;
  console.log(gameMarker);
}
