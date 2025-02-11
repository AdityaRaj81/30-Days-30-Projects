// Analog Clock
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    sc.style.transform = `rotate(${seconds * 6}deg)`;
    mn.style.transform = `rotate(${minutes * 6}deg)`;
    hr.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
}
setInterval(updateAnalogClock, 1000);

// Digital Clock with 12-hour/24-hour toggle
let is24HourFormat = false;
const digitalTime = document.getElementById('digitalTime');
const toggleFormatButton = document.getElementById('toggleFormat');

function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (!is24HourFormat) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        digitalTime.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    } else {
        hours = String(hours).padStart(2, '0');
        digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

toggleFormatButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatButton.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';
});
setInterval(updateDigitalClock, 1000);

// Day and Date
const dayElement = document.getElementById('day');
const dateElement = document.getElementById('date');

function updateDayAndDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}
updateDayAndDate();

// Theme Toggle
const themeToggleButton = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme', !isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);
    isDarkTheme = !isDarkTheme;
    themeToggleButton.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});
