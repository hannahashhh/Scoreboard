
let homeScore = 0
let guestScore = 0

function homePoints1() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}
function homePoints2() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore 
}
function homePoints3() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore 
}
function guestPoints1() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}
function guestPoints2() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore 
}
function guestPoints3() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore 
}

let countdown;
let totalSeconds = 0;
let originalSeconds = 0;

function parseTimeInput(timeStr) {
  const parts = timeStr.split(':');
  if (parts.length !== 2) return null;

  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);

  if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds > 59) {
    return null;
  }

  return minutes * 60 + seconds;
}

function formatTime(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
  document.getElementById('countdown').textContent = formatTime(totalSeconds);
}

function startCountdown() {
  if (countdown) return;

  const input = document.getElementById('timeInput').value.trim();
  if (input && totalSeconds === 0) {
    const parsed = parseTimeInput(input);
    if (parsed === null) {
      alert("Please enter a valid time in mm:ss format.");
      return;
    }
    totalSeconds = parsed;
    originalSeconds = totalSeconds;
  }

  if (totalSeconds > 0) {
    countdown = setInterval(() => {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(countdown);
        countdown = null;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function stopCountdown() {
  clearInterval(countdown);
  countdown = null;
}

function resetCountdown() {
  stopCountdown();
  totalSeconds = originalSeconds;
  updateDisplay();
}

