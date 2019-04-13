'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SkeletonDisplayTitle = require('./components/alpha/SkeletonDisplayTitle');

Object.defineProperty(exports, 'SkeletonDisplayTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SkeletonDisplayTitle).default;
  }
});

var _SkeletonBodyText = require('./components/skeletonBodyText/SkeletonBodyText');

Object.defineProperty(exports, 'SkeletonBodyText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SkeletonBodyText).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }