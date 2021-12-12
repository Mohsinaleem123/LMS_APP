"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAnswer = exports.rawMarkup = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _dompurify = _interopRequireDefault(require("dompurify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rawMarkup = function rawMarkup(data) {
  var sanitizer = _dompurify.default.sanitize;
  var rawMarkup = (0, _marked.default)(sanitizer(data));
  return {
    __html: rawMarkup
  };
};

exports.rawMarkup = rawMarkup;

var checkAnswer = function checkAnswer(index, correctAnswer, answerSelectionType, _ref) {
  var userInput = _ref.userInput,
      userAttempt = _ref.userAttempt,
      currentQuestionIndex = _ref.currentQuestionIndex,
      continueTillCorrect = _ref.continueTillCorrect,
      showNextQuestionButton = _ref.showNextQuestionButton,
      incorrect = _ref.incorrect,
      correct = _ref.correct,
      setButtons = _ref.setButtons,
      setCorrectAnswer = _ref.setCorrectAnswer,
      setIncorrectAnswer = _ref.setIncorrectAnswer,
      setCorrect = _ref.setCorrect,
      setIncorrect = _ref.setIncorrect,
      setShowNextQuestionButton = _ref.setShowNextQuestionButton,
      setUserInput = _ref.setUserInput,
      setUserAttempt = _ref.setUserAttempt;
  var indexStr = "".concat(index);
  var disabledAll = {
    0: {
      disabled: true
    },
    1: {
      disabled: true
    },
    2: {
      disabled: true
    },
    3: {
      disabled: true
    }
  };

  if (answerSelectionType === 'single') {
    if (userInput[currentQuestionIndex] === undefined) {
      userInput.push(index);
    }

    if (indexStr === correctAnswer) {
      if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
        correct.push(currentQuestionIndex);
      }

      setButtons(function (prevState) {
        return _objectSpread({}, prevState, disabledAll, _defineProperty({}, index - 1, {
          className: indexStr === correctAnswer ? "correct" : "incorrect"
        }));
      });
      setCorrectAnswer(true);
      setIncorrectAnswer(false);
      setCorrect(correct);
      setShowNextQuestionButton(true);
    } else {
      if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
        incorrect.push(currentQuestionIndex);
      }

      if (continueTillCorrect) {
        setButtons(function (prevState) {
          return Object.assign({}, prevState, _defineProperty({}, index - 1, {
            disabled: !prevState[index - 1]
          }));
        });
      } else {
        setButtons(function (prevState) {
          return Object.assign({}, prevState, _objectSpread({}, disabledAll, _defineProperty({}, index - 1, {
            className: indexStr === correctAnswer ? "correct" : "incorrect"
          })));
        });
        setShowNextQuestionButton(true);
      }

      setIncorrectAnswer(true);
      setCorrectAnswer(false);
      setIncorrect(incorrect);
    }
  } else {
    var maxNumberOfMultipleSelection = correctAnswer.length;

    if (userInput[currentQuestionIndex] === undefined) {
      userInput[currentQuestionIndex] = [];
    }

    if (userInput[currentQuestionIndex].length < maxNumberOfMultipleSelection) {
      userInput[currentQuestionIndex].push(index);

      if (correctAnswer.includes(index)) {
        if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
          setButtons(function (prevState) {
            return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
              disabled: !prevState[index - 1],
              className: correctAnswer.includes(index) ? "correct" : "incorrect"
            }));
          });
        }
      } else {
        if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
          setButtons(function (prevState) {
            return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
              className: correctAnswer.includes(index) ? "correct" : "incorrect"
            }));
          });
        }
      }
    }

    if (maxNumberOfMultipleSelection === userAttempt) {
      var cnt = 0;

      for (var i = 0; i < correctAnswer.length; i++) {
        if (userInput[currentQuestionIndex].includes(correctAnswer[i])) {
          cnt++;
        }
      }

      if (cnt === maxNumberOfMultipleSelection) {
        correct.push(currentQuestionIndex);
        setCorrectAnswer(true);
        setIncorrectAnswer(false);
        setCorrect(correct);
        setShowNextQuestionButton(true);
        setUserAttempt(1);
      } else {
        incorrect.push(currentQuestionIndex);
        setIncorrectAnswer(true);
        setCorrectAnswer(false);
        setIncorrect(incorrect);
        setShowNextQuestionButton(true);
        setUserAttempt(1);
      }
    } else {
      if (!showNextQuestionButton) {
        setUserInput(userInput);
        setUserAttempt(userAttempt + 1);
      }
    }
  }
};

exports.checkAnswer = checkAnswer;