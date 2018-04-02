function Thermostat() {
  this._temp = 20;
  this.DEFAULT = 20;
  this._min = 10;
  this._max = 32;
  this._defaultMax = 25;
  this._powerSav = true
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.minimum = function () {
  return this._min;
};

Thermostat.prototype.powerSavingOn = function () {
  return this._powerSav;
};

Thermostat.prototype.powerSavingOff = function () {
  if(this._powerSav === true){
    return this._powerSav = false;
  }
  else {
    return false
  };
};

Thermostat.prototype.maximum = function () {
  if(this._powerSav === true) {
    return this._defaultMax;
  }
  return this._max;
};

Thermostat.prototype.up = function (increment) {
  if(this._powerSav === true && (this._temp + increment) > this._defaultMax){
    throw "Reached PSM limit"
  }
  else if(this._powerSav === false && (this._temp + increment) > this._max) {
    throw "Reached temperature limit"
  }
  else {
    this._temp += increment;
  }
};

Thermostat.prototype.down = function (increment) {
  this._temp -= increment;
};

Thermostat.prototype.resetTemp = function () {
  this._temp = this.DEFAULT
};

Thermostat.prototype.energyUsage = function () {
if(this.temperature() < 18) {
  return 'low-usage';
}
else if (this.temperature() < 25) {
  return 'medium-usage';
}
else {
  return 'high-usage';
}
};
