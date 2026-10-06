var app = (function() {
  'use strict';

  // Runs when the DOM is ready (shorthand for $(document).ready)
  $(function () {

    // ---------- Helpers ----------

    function pad(number) {
      return String(number).padStart(2, '0');
    }

    // ---------- Toggle buttons ----------

    const LAMP_ON = 'fa-solid fa-lightbulb';
    const LAMP_OFF = 'fa-regular fa-lightbulb';
    const MUSIC_ON = 'fa-solid fa-music';
    const MUSIC_OFF = 'fa-solid fa-volume-xmark';

    function makeToggle(buttonId, iconOn, iconOff) {
      const $button = $('#' + buttonId);
      if ($button.length === 0) {
        console.warn('Button not found: ' + buttonId);
        return;
      }

      $button.on('click', function () {
        const $label = $button.find('span');
        const isOn = $label.text() === 'On';

        $label.text(isOn ? 'Off' : 'On');
        $button.find('i').attr('class', isOn ? iconOff : iconOn);
        $button.toggleClass('btn-warning btn-secondary');
      });
    }

    makeToggle('kitchen-lights-btn', LAMP_ON, LAMP_OFF);
    makeToggle('living-ceiling-btn', LAMP_ON, LAMP_OFF);
    makeToggle('living-ambient-btn', LAMP_ON, LAMP_OFF);
    makeToggle('living-music-btn', MUSIC_ON, MUSIC_OFF);

    // ---------- Temperatures ----------

    function randomTemperature() {
      return (10 + Math.random() * 20).toFixed(1);
    }

    function updateTemperatures() {
      $('#kitchen-temp').text(randomTemperature() + ' °C');
      $('#living-temp').text(randomTemperature() + ' °C');
    }

    setInterval(updateTemperatures, 5000);

    // ---------- Clock ----------

    function updateDate() {
      const now = new Date();
      $('#clock-date').text(
        now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate())
      );
    }

    function updateClock() {
      const now = new Date();
      $('#clock-time').text(
        pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds())
      );
    }

    updateDate();
    updateClock();
    setInterval(updateClock, 1000);
  });
})();
