"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Button = function Button(_ref) {
  var children = _ref.children,
    href = _ref.href,
    as = _ref.as,
    _ref$color = _ref.color,
    color = _ref$color === undefined ? "black" : _ref$color;

  return _react2.default.createElement(
    _link2.default,
    { as: as, href: href },
    _react2.default.createElement(
      "a",
      {
        className:
          _style2.default.dynamic([["436103041", [color]]]) +
          " " +
          (_style2.default.dynamic([["436103041", [color]]]) + " " + "button" ||
            "")
      },
      children,
      _react2.default.createElement(_style2.default, {
        styleId: "436103041",
        css: [
          "a.__jsx-style-dynamic-selector{width:300px;height:50px;background:" +
            color +
            ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:16px;text-decoration:none;text-transform:uppercase;}",
          "a.__jsx-style-dynamic-selector:hover{cursor:pointer;text-decoration:underline;}"
        ],
        dynamic: [color]
      })
    )
  );
};

exports.default = Button;
