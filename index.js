let home = 0;
let guest = 0;

let homeScore = document.getElementById("hscore");
let guestScore = document.getElementById("gscore");

function addScore(team, points) {
    if (team === 'home') {
        home += points;
        homeScore.textContent = home;
    } else if (team === 'guest') {
        guest += points;
        guestScore.textContent = guest;
    }
}

function resetScores() {
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
}
