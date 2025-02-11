// Update date, day, and time in header
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('currentDate').textContent = now.toLocaleDateString(undefined, options);
  document.getElementById('currentDay').textContent = now.toLocaleDateString(undefined, { weekday: 'long' });
  document.getElementById('currentTime').textContent = formatTime(now);
}

// Update date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display time immediately

// Clock functionality
let is24HourFormat = true; // Default to 24-hour format

function formatTime(date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  if (!is24HourFormat) {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
      return `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
}

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;

document.getElementById('startStopwatch').addEventListener('click', function() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(function() {
      stopwatchTime += 0.1; // Increment by 100ms
      document.getElementById('stopwatchDisplay').textContent = formatStopwatchTime(stopwatchTime);
  }, 100);
});

document.getElementById('stopStopwatch').addEventListener('click', function() {
  clearInterval(stopwatchInterval);
});

document.getElementById('resetStopwatch').addEventListener('click', function() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatchDisplay').textContent = formatStopwatchTime(stopwatchTime);
  document.getElementById('splitTimes').innerHTML = ''; // Clear split times
});

document.getElementById('splitStopwatch').addEventListener('click', function() {
  const splitTime = document.createElement('div');
  splitTime.textContent = `Split: ${formatStopwatchTime(stopwatchTime)}`;
  document.getElementById('splitTimes').appendChild(splitTime);
});

// Timer functionality
let timerInterval;
let timerTime = 0;

document.getElementById('startTimer').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerTime = parseInt(document.getElementById('timerInput').value);
  
  if (isNaN(timerTime) || timerTime <= 0) {
      alert('Please enter a valid number of seconds.');
      return;
  }

  document.getElementById('timerDisplay').textContent = formatTimerTime(timerTime);
  timerInterval = setInterval(function() {
      if (timerTime <= 0) {
          clearInterval(timerInterval);
          alert('Time is up!');
          return;
      }
      timerTime--;
      document.getElementById('timerDisplay').textContent = formatTimerTime(timerTime);
  }, 1000);
});

document.getElementById('stopTimer').addEventListener('click', function() {
  clearInterval(timerInterval);
});

document.getElementById('resetTimer').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerTime = 0;
  document.getElementById('timerDisplay').textContent = '00:00:00';
  document.getElementById('timerInput').value = '';
});

function formatTimerTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Format stopwatch time
function formatStopwatchTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time - Math.floor(time)) * 1000);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.querySelectorAll('.stopwatch-section, .timer-section').forEach(section => {
      section.classList.toggle('dark-theme');
  });
  const isDarkTheme = document.body.classList.contains('dark-theme');
  this.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

// Time format toggle functionality
document.getElementById('timeFormatToggle').addEventListener('click', function() {
  is24HourFormat = !is24HourFormat;
  this.textContent = is24HourFormat ? 'Switch to 12 Hour' : 'Switch to 24 Hour';
});