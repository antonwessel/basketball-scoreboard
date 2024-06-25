let homeScoreEl = document.querySelector(".home-score")
let homeScore = 0
let guestScore = 0
let guestScoreEl = document.querySelector(".guest-score")

function increaseScore(amount, side) {
    if (side.toLowerCase() == "guest") {
        guestScore += amount
        updateScoresText()
    } else if (side.toLowerCase() == "home") {
        homeScore += amount
        updateScoresText()
    }
}

function updateScoresText() {
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}

function resetScores() {
    homeScore = 0
    guestScore = 0
    updateScoresText()
}