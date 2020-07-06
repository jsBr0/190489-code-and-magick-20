'use strict';

window.util = (function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  return {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,

    getRandomInteger: function (min, max) {
      var random = min + Math.random() * (max + 1 - min);
      return Math.floor(random);
    },

    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEY) {
        evt.preventDefault();
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    }
  };
})();

