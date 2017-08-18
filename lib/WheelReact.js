'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WheelReact = {};

WheelReact.pauseWheelEvent = false;

WheelReact._config = {};

WheelReact.config = function (config) {
  var options = ['right', 'left', 'up', 'down'];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var option = _step.value;

      if (config.hasOwnProperty(option)) {
        WheelReact._config[option] = config[option];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

WheelReact.events = {
  onWheel: function onWheel(e) {
    if (WheelReact.pauseWheelEvent) {
      return;
    }
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0 && WheelReact._config.hasOwnProperty('left')) {
        WheelReact._config.left();
      } else if (e.deltaX < 0 && WheelReact._config.hasOwnProperty('right')) {
        WheelReact._config.right();
      }
    } else {
      if (e.deltaY > 0 && WheelReact._config.hasOwnProperty('up')) {
        WheelReact._config.up();
      } else if (e.deltaY < 0 && WheelReact._config.hasOwnProperty('down')) {
        WheelReact._config.down();
      }
    }
    WheelReact.pauseWheelEvent = true;
    WheelReact.timeout = setTimeout(function () {
      WheelReact.pauseWheelEvent = false;
    }, 200);
  }
};

WheelReact.clearTimeout = function () {
  if (WheelReact.timeout) {
    clearTimeout(WheelReact.timeout);
  }
};

exports.default = WheelReact;