let homeScoreEl = document.querySelector(".home-score")
let homeScore = 0
let guestScore = 0
let guestScoreEl = document.querySelector(".guest-score")

function increaseScore(amount, side) {
    if (side.toLowerCase() == "guest") {
        guestScore += amount
        guestScoreEl.textContent = guestScore
    } else if (side.toLowerCase() == "home") {
        homeScore += amount
        homeScoreEl.textContent = homeScore
    }
}