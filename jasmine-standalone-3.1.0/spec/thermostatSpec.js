describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature limits', function(){
    it('default is 20 degrees', function(){
      expect(thermostat.temperature()).toBe(20)
    });

    it('minimum is 10 degrees', function(){
      expect(thermostat.minimum()).toBe(10)
    });
  });

  describe('changes the temperature', function(){
    it('increases the temperature', function(){
      thermostat.up(1)
      expect(thermostat.temperature()).toBe(21)
    });

    it('decreases the temperature', function(){
      thermostat.down(1)
      expect(thermostat.temperature()).toBe(19)
    });
  });

  describe('power saving mode is on', function(){
    it('is on by default', function(){
      expect(thermostat.powerSavingOn()).toEqual(true)
    });

    it('maximum temperature is 25 degrees', function(){
      expect(thermostat.maximum()).toBe(25)
    });
  });

  describe('power saving mode is off', function(){
    it('is off', function(){
      console.log(thermostat.powerSavingOff())
      expect(thermostat.powerSavingOff()).toEqual(false)
    });

    it('maximum temperature is 32 degrees', function(){
      thermostat.powerSavingOff()
      expect(thermostat.maximum()).toBe(32)
    });
  });

  describe('reset the thermostat', function(){
    it('resets to 20 degrees', function() {
      thermostat.resetTemp()
      expect(thermostat.temperature()).toBe(20)
    });
  });

  describe('thermostat current energy usage', function(){
    it('it temp < 18', function() {
      thermostat.down(8)
      console.log(thermostat.temperature())
      expect(thermostat.energyUsage()).toBe('Low Usage')
    })
    it('is medium usage', function() {
      console.log(thermostat.temperature())

      expect(thermostat.energyUsage()).toBe('Medium Usage')
    })
    it('is high usage', function() {
      thermostat.up(10)
      console.log(thermostat.temperature())

      expect(thermostat.energyUsage()).toBe('High Usage')
    })
  });
});
