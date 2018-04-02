$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
  $('#temperature').html(`${thermostat.temperature()}°C`);
  $('#temperature').attr('class', thermostat.energyUsage());
  }

  function getWeather(city) {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543038ac6ec11c62ded8555f02ceb1bc`, function(response) {
      var temp = Math.floor(response.main.temp - 273);
      $('#print-weather').html(`${temp} degrees in ${city.capitalizeAll()}`);
    })
  }

  $('#get-weather').on('click', function(){
    var city = document.getElementById('select-city').value
    getWeather(city)
  })




});

String.prototype.capitalizeAll = function() {
    var arr = this.split(" ")
    end = []
    arr.forEach( function(word) {
      end.push(word.charAt(0).toUpperCase() + word.slice(1))
    })
   return end.join(" ");
}
