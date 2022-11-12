homeScore = 0;
guestScore = 0;

homeScoreEl = document.getElementById("home-score");
guestScoreEl = document.getElementById("guest-score");

function add1home() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
}

function add2home() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
}

function add3home() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
}

function add1guest() {
  guestScore += 1;
  guestScoreEl.innerText = guestScore;
}

function add2guest() {
  guestScore += 2;
  guestScoreEl.innerText = guestScore;
}

function add3guest() {
  guestScore += 3;
  guestScoreEl.innerText = guestScore;
}

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.innerText = 0;
  guestScoreEl.innerText = 0;
}
