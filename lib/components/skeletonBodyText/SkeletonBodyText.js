'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SkeletonBodyText = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonBodyText = exports.SkeletonBodyText = function SkeletonBodyText(props) {
    var lines = props.lines ? props.lines : 3;
    var rows = [];
    for (var i = 0; i < lines; i++) {
        rows.push(_react2.default.createElement('div', { 'class': 'SkeletonBodyText' }));
    }
    return _react2.default.createElement(
        'div',
        { 'class': 'SkeletonBodyText__SkeletonBodyTextContainer' },
        rows
    );
};
exports.default = SkeletonBodyText;