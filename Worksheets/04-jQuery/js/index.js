var app = (function() {
  'use strict';

  // Runs when the DOM is ready (shorthand for $(document).ready)
  $(function () {

    // ---------- Helpers ----------

    function pad(number) {
      return String(number).padStart(2, '0');
    }

    function formatTime(date) {
      return pad(date.getHours()) + ':' + pad(date.getMinutes());
    }

    // "1 second ago", "5 seconds ago", ...
    function plural(value, unit) {
      return value + ' ' + unit + (value === 1 ? '' : 's') + ' ago';
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

    // ---------- Weather (OpenWeatherMap) ----------

    // W4-2b: call structure given in the worksheet
    const WEATHER_URL =
      'https://api.openweathermap.org/data/2.5/weather?units=metric&q=leiria&appid=' +
      window.WEATHER_API_KEY;

    let fetchedAt = null;   // time of the last successful request

    // Success callback: fills the weather panel (W4-2a)
    function showWeather(data) {
      $('#weather-temp').text(data.main.temp.toFixed(1) + ' °C');
      $('#weather-max').text(data.main.temp_max.toFixed(1) + ' °C');
      $('#weather-min').text(data.main.temp_min.toFixed(1) + ' °C');
      $('#weather-humidity').text(data.main.humidity + ' %');

      // The API sends Unix time in seconds; Date expects milliseconds
      $('#weather-sunrise').text(formatTime(new Date(data.sys.sunrise * 1000)));
      $('#weather-sunset').text(formatTime(new Date(data.sys.sunset * 1000)));

      fetchedAt = new Date();
      $('#weather-fetched').text(formatTime(fetchedAt));
      updateWeatherAge();
    }

    // Error callback: shows the HTTP status code
    function showWeatherError(xhr) {
      $('#weather-age').text('weather not available (error ' + xhr.status + ')');
    }

    function loadWeather() {
      if (!window.WEATHER_API_KEY || window.WEATHER_API_KEY === 'YOUR_API_KEY') {
        $('#weather-age').text('missing API key (js/config.js)');
        return;
      }
      $.getJSON(WEATHER_URL)
        .done(showWeather)
        .fail(showWeatherError);
    }

    // W4-2c: seconds during the first minute, minutes until one hour, then hours
    function updateWeatherAge() {
      if (fetchedAt === null) {
        return;
      }
      const seconds = Math.floor((Date.now() - fetchedAt.getTime()) / 1000);

      if (seconds < 60) {
        $('#weather-age').text(plural(seconds, 'second'));
      } else if (seconds < 3600) {
        $('#weather-age').text(plural(Math.floor(seconds / 60), 'minute'));
      } else {
        $('#weather-age').text(plural(Math.floor(seconds / 3600), 'hour'));
      }
    }

    loadWeather();
    setInterval(updateWeatherAge, 1000);
  });
})();
