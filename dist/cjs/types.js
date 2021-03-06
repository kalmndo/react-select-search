"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNameType = exports.valueType = exports.optionType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var option = _propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
});

var optionType = _propTypes.default.oneOfType([option, _propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(option)
})]);

exports.optionType = optionType;

var valueType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);

exports.valueType = valueType;

var classNameType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);

exports.classNameType = classNameType;