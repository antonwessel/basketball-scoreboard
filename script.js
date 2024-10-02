let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

function incrementHome(amount) {
    homeScore += amount
    homeScoreEl.textContent = homeScore
}

function incrementGuest(amount) {
    guestScore += amount
    guestScoreEl.textContent = guestScore
}