'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonThumbnail = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonThumbnail = exports.SkeletonThumbnail = function SkeletonThumbnail(props) {
  var size = 'SkeletonThumbnail-small';
  switch (props.size) {
    case 'medium':
      size = 'SkeletonThumbnail-medium';
      break;
    case 'large':
      size = 'SkeletonThumbnail-large';
      break;
    default:
      size = 'SkeletonThumbnail-small';
      break;
  }
  var round = props.round === true ? 'SkeletonThumbnail-round' : '';
  return _react2.default.createElement(
    'div',
    { className: 'skeleton' },
    _react2.default.createElement('div', { className: 'SkeletonThumbnail ' + size + ' ' + round })
  );
};
exports.default = SkeletonThumbnail;