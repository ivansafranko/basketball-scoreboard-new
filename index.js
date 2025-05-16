let homeScore = 0
let awayScore = 0

let scoreHomeEl = document.getElementById("scoreHome-el")
scoreHomeEl.textContent = homeScore

let scoreAwayEl = document.getElementById("scoreAway-el")
scoreAwayEl.textContent = awayScore


function reset() {
    homeScore = 0
    awayScore = 0
    scoreHomeEl.textContent = homeScore
    scoreAwayEl.textContent = awayScore
}

function addOneHome() {
    homeScore += 1
    scoreHomeEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    scoreHomeEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    scoreHomeEl.textContent = homeScore
}

function addOneAway() {
    awayScore += 1
    scoreAwayEl.textContent = awayScore
}

function addTwoAway() {
    awayScore += 2
    scoreAwayEl.textContent = awayScore
}

function addThreeAway() {
    awayScore += 3
    scoreAwayEl.textContent = awayScore
}


