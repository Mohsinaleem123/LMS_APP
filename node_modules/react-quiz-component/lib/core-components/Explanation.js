"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Explanation = function Explanation(_ref) {
  var question = _ref.question,
      isResultPage = _ref.isResultPage;
  var explanation = question.explanation;

  if (!explanation) {
    return null;
  }

  if (isResultPage) {
    return _react.default.createElement("div", {
      className: "explanation"
    }, explanation);
  }

  return _react.default.createElement("div", null, _react.default.createElement("br", null), explanation);
};

var _default = Explanation;
exports.default = _default;