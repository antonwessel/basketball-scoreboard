let homeScore = 0;
let guestScore = 0;
let timer;
let seconds = 0;
let minutes = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const timerEl = document.getElementById("timer");

window.onload = function () {
    startTimer();
};

function updateScore(team, amount) {
    if (team === 'home') {
        homeScore += amount;
    } else if (team === 'guest') {
        guestScore += amount;
    }
    updateScores();
    highlightLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    updateScores();
    resetTimer();
    startTimer();
}

function updateScores() {
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            timerEl.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    timerEl.textContent = "0:00";
}

function highlightLeader() {
    const homeIsLeading = homeScore > guestScore;
    const guestIsLeading = guestScore > homeScore;

    resetHighlight();

    if (homeIsLeading) {
        highlightTeam("home");
    } else if (guestIsLeading) {
        highlightTeam("guest");
    }
}

function highlightTeam(team) {
    const element = document.getElementById(`${team}-score`);
    element.style.fontSize = "150px";
    element.style.color = "gold";
    element.style.backgroundColor = "black";
    element.style.textShadow = "0 0 10px gold, 0 0 20px gold";
    element.style.boxShadow = "0 0 20px rgba(255, 223, 0, 0.6)";
}

function resetHighlight() {
    const teams = ["home", "guest"];
    teams.forEach((team) => {
        const element = document.getElementById(`${team}-score`);
        element.style.fontSize = "90px";
        element.style.color = "white";
        element.style.backgroundColor = "black";
        element.style.textShadow = "none";
        element.style.boxShadow = "none";
    });
}
