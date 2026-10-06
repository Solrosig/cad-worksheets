var app = (function() {
  'use strict';

  // ---------- Helpers ----------

  // Adds a leading zero: 7 becomes "07"
  function pad(number) {
    return String(number).padStart(2, '0');
  }

  // ---------- Toggle buttons: lights and music (W3-2a, W3-2c, W3-2d) ----------

  const LAMP_ON = 'fa-solid fa-lightbulb';
  const LAMP_OFF = 'fa-regular fa-lightbulb';
  const MUSIC_ON = 'fa-solid fa-music';
  const MUSIC_OFF = 'fa-solid fa-volume-xmark';

  // Makes one button switch between On and Off: text, icon and colour
  function makeToggle(buttonId, iconOn, iconOff) {
    const button = document.getElementById(buttonId);
    if (button === null) {
      console.warn('Button not found: ' + buttonId);
      return;
    }
    const icon = button.querySelector('i');
    const label = button.querySelector('span');

    button.addEventListener('click', function () {
      const isOn = label.textContent === 'On';

      label.textContent = isOn ? 'Off' : 'On';
      icon.className = isOn ? iconOff : iconOn;
      button.classList.toggle('btn-warning', !isOn);
      button.classList.toggle('btn-secondary', isOn);
    });
  }

  makeToggle('kitchen-lights-btn', LAMP_ON, LAMP_OFF);
  makeToggle('living-ceiling-btn', LAMP_ON, LAMP_OFF);
  makeToggle('living-ambient-btn', LAMP_ON, LAMP_OFF);
  makeToggle('living-music-btn', MUSIC_ON, MUSIC_OFF);

  // ---------- Temperatures: random value from 10 to 30 °C every 5 seconds (W3-2e) ----------

  function randomTemperature() {
    return (10 + Math.random() * 20).toFixed(1);
  }

  function updateTemperatures() {
    document.getElementById('kitchen-temp').textContent = randomTemperature() + ' °C';
    document.getElementById('living-temp').textContent = randomTemperature() + ' °C';
  }

  setInterval(updateTemperatures, 5000);

  // ---------- Clock: date on load, time every second (W3-2f) ----------

  function updateDate() {
    const now = new Date();
    document.getElementById('clock-date').textContent =
      now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  }

  function updateClock() {
    const now = new Date();
    document.getElementById('clock-time').textContent =
      pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  }

  updateDate();
  updateClock();
  setInterval(updateClock, 1000);
})();
