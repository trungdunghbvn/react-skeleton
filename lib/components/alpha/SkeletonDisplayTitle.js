'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonDisplayTitle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonDisplayTitle = exports.SkeletonDisplayTitle = function SkeletonDisplayTitle(props) {
  var size = 'SkeletonDisplayTitle-small';
  switch (props.size) {
    case 'medium':
      size = 'SkeletonDisplayTitle-medium';
      break;
    case 'large':
      size = 'SkeletonDisplayTitle-large';
      break;
    default:
      size = 'SkeletonDisplayTitle-small';
      break;
  }
  return _react2.default.createElement(
    'div',
    { className: 'skeleton' },
    _react2.default.createElement('div', { className: 'SkeletonDisplayTitle ' + size })
  );
};
exports.default = SkeletonDisplayTitle;