let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let timer
let seconds = 0
let minutes = 0

window.onload = function () {
    startTimer()
}

function incrementHome(amount) {
    homeScore += amount
    updateScores()
    highlightLeader()
}

function incrementGuest(amount) {
    guestScore += amount
    updateScores()
    highlightLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    updateScores()
    resetTimer()
    startTimer()
}

function updateScores() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            seconds++
            if (seconds === 60) {
                seconds = 0
                minutes++
            }
            document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)
        }, 1000)
    }
}

function resetTimer() {
    clearInterval(timer)
    timer = null
    seconds = 0
    minutes = 0
    document.getElementById("timer").textContent = "0:00"
}

function highlightLeader() {
    let leader
    if (homeScore > guestScore) {
        leader = "home"
    } else if (guestScore > homeScore) {
        leader = "guest"
    } else {
        leader = "none"
    }

    if (leader === "home") {
        document.getElementById("home-score").style.fontSize = "150px";
        document.getElementById("guest-score").style.fontSize = "90px";
    } else if (leader == "guest") {
        document.getElementById("guest-score").style.fontSize = "150px";
        document.getElementById("home-score").style.fontSize = "90px";
    } else if (leader === "none") {
        document.getElementById("home-score").style.fontSize = "90px";
        document.getElementById("guest-score").style.fontSize = "90px";
    }
}