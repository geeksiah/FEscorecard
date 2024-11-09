let homeScore = 0;
let guestScore = 0;

function addHome(number) {
  console.log("Key pressed");
  homeScore += number;
  document.getElementById("homecount").textContent = homeScore;
}

function addGuest(number) {
  console.log("Key pressed");
  guestScore += number;
  document.getElementById("guestcount").textContent = guestScore;
}

function subtractHome(number) {
  console.log("Key pressed");
  homeScore = Math.max(homeScore - number, 0);
  document.getElementById("homecount").textContent = homeScore;
}

function subtractGuest(number) {
  console.log("Key pressed");
  guestScore = Math.max(guestScore - number, 0);
  document.getElementById("guestcount").textContent = guestScore;
}

function reset() {
  homeScore = guestScore = 0;
  document.getElementById("homecount").textContent = homeScore;
  document.getElementById("guestcount").textContent = guestScore;
}
