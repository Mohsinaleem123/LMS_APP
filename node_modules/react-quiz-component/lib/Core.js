"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QuizResultFilter = _interopRequireDefault(require("./core-components/QuizResultFilter"));

var _helpers = require("./core-components/helpers");

var _InstantFeedback = _interopRequireDefault(require("./core-components/InstantFeedback"));

var _Explanation = _interopRequireDefault(require("./core-components/Explanation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Core = function Core(_ref) {
  var questions = _ref.questions,
      appLocale = _ref.appLocale,
      showDefaultResult = _ref.showDefaultResult,
      onComplete = _ref.onComplete,
      customResultPage = _ref.customResultPage,
      showInstantFeedback = _ref.showInstantFeedback,
      continueTillCorrect = _ref.continueTillCorrect;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      incorrectAnswer = _useState2[0],
      setIncorrectAnswer = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      correctAnswer = _useState4[0],
      setCorrectAnswer = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showNextQuestionButton = _useState6[0],
      setShowNextQuestionButton = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      endQuiz = _useState8[0],
      setEndQuiz = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      currentQuestionIndex = _useState10[0],
      setCurrentQuestionIndex = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      buttons = _useState12[0],
      setButtons = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      buttonClasses = _useState14[0],
      setButtonClasses = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      correct = _useState16[0],
      setCorrect = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      incorrect = _useState18[0],
      setIncorrect = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      userInput = _useState20[0],
      setUserInput = _useState20[1];

  var _useState21 = (0, _react.useState)('all'),
      _useState22 = _slicedToArray(_useState21, 2),
      filteredValue = _useState22[0],
      setFilteredValue = _useState22[1];

  var _useState23 = (0, _react.useState)(1),
      _useState24 = _slicedToArray(_useState23, 2),
      userAttempt = _useState24[0],
      setUserAttempt = _useState24[1];

  var _useState25 = (0, _react.useState)(true),
      _useState26 = _slicedToArray(_useState25, 2),
      showDefaultResultState = _useState26[0],
      setShowDefaultResult = _useState26[1];

  var _useState27 = (0, _react.useState)(undefined),
      _useState28 = _slicedToArray(_useState27, 2),
      answerSelectionTypeState = _useState28[0],
      setAnswerSelectionType = _useState28[1];

  var _useState29 = (0, _react.useState)(0),
      _useState30 = _slicedToArray(_useState29, 2),
      totalPoints = _useState30[0],
      setTotalPoints = _useState30[1];

  var _useState31 = (0, _react.useState)(0),
      _useState32 = _slicedToArray(_useState31, 2),
      correctPoints = _useState32[0],
      setCorrectPoints = _useState32[1];

  var _useState33 = (0, _react.useState)(questions[currentQuestionIndex]),
      _useState34 = _slicedToArray(_useState33, 2),
      question = _useState34[0],
      setQuestion = _useState34[1];

  var _useState35 = (0, _react.useState)(undefined),
      _useState36 = _slicedToArray(_useState35, 2),
      questionSummary = _useState36[0],
      setQuestionSummary = _useState36[1];

  (0, _react.useEffect)(function () {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);
  (0, _react.useEffect)(function () {
    setQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

    setAnswerSelectionType(answerSelectionType || 'single');
  }, [question, currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    if (endQuiz) {
      var totalPointsTemp = 0;
      var correctPointsTemp = 0;

      for (var i = 0; i < questions.length; i++) {
        var point = questions[i].point || 0;

        if (typeof point === 'string' || point instanceof String) {
          point = parseInt(point);
        }

        totalPointsTemp = totalPointsTemp + point;

        if (correct.includes(i)) {
          correctPointsTemp = correctPointsTemp + point;
        }
      }

      setTotalPoints(totalPointsTemp);
      setCorrectPoints(correctPointsTemp);
    }
  }, [endQuiz]);
  (0, _react.useEffect)(function () {
    setQuestionSummary({
      numberOfQuestions: questions.length,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions: questions,
      userInput: userInput,
      totalPoints: totalPoints,
      correctPoints: correctPoints
    });
  }, [totalPoints, correctPoints]);
  (0, _react.useEffect)(function () {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary);
    }
  }, [endQuiz, questionSummary]);

  var nextQuestion = function nextQuestion(currentQuestionIndex) {
    setIncorrectAnswer(false);
    setCorrectAnswer(false);
    setShowNextQuestionButton(false);
    setButtons({});

    if (currentQuestionIndex + 1 === questions.length) {
      setEndQuiz(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  var handleChange = function handleChange(event) {
    setFilteredValue(event.target.value);
  };

  var renderAnswerInResult = function renderAnswerInResult(question, userInputIndex) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType;
    var answerSelectionType = question.answerSelectionType;
    var answerBtnCorrectClassName;
    var answerBtnIncorrectClassName; // Default single to avoid code breaking due to automatic version upgrade

    answerSelectionType = answerSelectionType || 'single';
    return answers.map(function (answer, index) {
      if (answerSelectionType === 'single') {
        // correctAnswer - is string
        answerBtnCorrectClassName = "".concat(index + 1) === correctAnswer ? 'correct' : '';
        answerBtnIncorrectClassName = "".concat(userInputIndex) !== correctAnswer && "".concat(index + 1) === "".concat(userInputIndex) ? 'incorrect' : '';
      } else {
        // correctAnswer - is array of numbers
        answerBtnCorrectClassName = correctAnswer.includes(index + 1) ? 'correct' : '';
        answerBtnIncorrectClassName = !correctAnswer.includes(index + 1) && userInputIndex.includes(index + 1) ? 'incorrect' : '';
      }

      return _react.default.createElement("div", {
        key: index
      }, _react.default.createElement("button", {
        disabled: true,
        className: "answerBtn btn " + answerBtnCorrectClassName + answerBtnIncorrectClassName
      }, questionType === 'text' && _react.default.createElement("span", null, answer), questionType === 'photo' && _react.default.createElement("img", {
        src: answer,
        alt: "image"
      })));
    });
  };

  var renderQuizResultQuestions = (0, _react.useCallback)(function () {
    var filteredQuestions;
    var filteredUserInput;

    if (filteredValue !== 'all') {
      if (filteredValue === 'correct') {
        filteredQuestions = questions.filter(function (question, index) {
          return correct.indexOf(index) !== -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return correct.indexOf(index) !== -1;
        });
      } else {
        filteredQuestions = questions.filter(function (question, index) {
          return incorrect.indexOf(index) !== -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return incorrect.indexOf(index) !== -1;
        });
      }
    }

    return (filteredQuestions ? filteredQuestions : questions).map(function (question, index) {
      var userInputIndex = filteredUserInput ? filteredUserInput[index] : userInput[index]; // Default single to avoid code breaking due to automatic version upgrade

      var answerSelectionType = question.answerSelectionType || 'single';
      return _react.default.createElement("div", {
        className: "result-answer-wrapper",
        key: index + 1
      }, _react.default.createElement("h3", {
        dangerouslySetInnerHTML: (0, _helpers.rawMarkup)("Q".concat(question.questionIndex, ": ").concat(question.question))
      }), question.questionPic && _react.default.createElement("img", {
        src: question.questionPic,
        alt: "image"
      }), renderTags(answerSelectionType, question.correctAnswer.length, question.segment), _react.default.createElement("div", {
        className: "result-answer"
      }, renderAnswerInResult(question, userInputIndex)), _react.default.createElement(_Explanation.default, {
        question: question,
        isResultPage: true
      }));
    });
  }, [endQuiz, filteredValue]);

  var renderAnswers = function renderAnswers(question, buttons) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType;
    var answerSelectionType = question.answerSelectionType;

    var onClickAnswer = function onClickAnswer(index) {
      return (0, _helpers.checkAnswer)(index + 1, correctAnswer, answerSelectionType, {
        userInput: userInput,
        userAttempt: userAttempt,
        currentQuestionIndex: currentQuestionIndex,
        continueTillCorrect: continueTillCorrect,
        showNextQuestionButton: showNextQuestionButton,
        incorrect: incorrect,
        correct: correct,
        setButtons: setButtons,
        setCorrectAnswer: setCorrectAnswer,
        setIncorrectAnswer: setIncorrectAnswer,
        setCorrect: setCorrect,
        setIncorrect: setIncorrect,
        setShowNextQuestionButton: setShowNextQuestionButton,
        setUserInput: setUserInput,
        setUserAttempt: setUserAttempt
      });
    }; // Default single to avoid code breaking due to automatic version upgrade


    answerSelectionType = answerSelectionType || 'single';
    return answers.map(function (answer, index) {
      return _react.default.createElement(_react.Fragment, {
        key: index
      }, buttons[index] !== undefined ? _react.default.createElement("button", {
        disabled: buttons[index].disabled || false,
        className: "".concat(buttons[index].className, " answerBtn btn"),
        onClick: function onClick() {
          return onClickAnswer(index);
        }
      }, questionType === 'text' && _react.default.createElement("span", null, answer), questionType === 'photo' && _react.default.createElement("img", {
        src: answer,
        alt: "image"
      })) : _react.default.createElement("button", {
        onClick: function onClick() {
          return onClickAnswer(index);
        },
        className: "answerBtn btn"
      }, questionType === 'text' && answer, questionType === 'photo' && _react.default.createElement("img", {
        src: answer,
        alt: "image"
      })));
    });
  };

  var renderTags = function renderTags(answerSelectionType, numberOfSelection, segment) {
    var singleSelectionTagText = appLocale.singleSelectionTagText,
        multipleSelectionTagText = appLocale.multipleSelectionTagText,
        pickNumberOfSelection = appLocale.pickNumberOfSelection;
    return _react.default.createElement("div", {
      className: "tag-container"
    }, answerSelectionType === 'single' && _react.default.createElement("span", {
      className: "single selection-tag"
    }, singleSelectionTagText), answerSelectionType === 'multiple' && _react.default.createElement("span", {
      className: "multiple selection-tag"
    }, multipleSelectionTagText), _react.default.createElement("span", {
      className: "number-of-selection"
    }, pickNumberOfSelection.replace("<numberOfSelection>", numberOfSelection)), segment && _react.default.createElement("span", {
      className: "selection-tag segment"
    }, segment));
  };

  var renderResult = function renderResult() {
    return _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h2", null, appLocale.resultPageHeaderText.replace("<correctIndexLength>", correct.length).replace("<questionLength>", questions.length)), _react.default.createElement("h2", null, appLocale.resultPagePoint.replace("<correctPoints>", correctPoints).replace("<totalPoints>", totalPoints)), _react.default.createElement("br", null), _react.default.createElement(_QuizResultFilter.default, {
      filteredValue: filteredValue,
      handleChange: handleChange,
      appLocale: appLocale
    }), renderQuizResultQuestions());
  };

  return _react.default.createElement("div", {
    className: "questionWrapper"
  }, !endQuiz && _react.default.createElement("div", {
    className: "questionWrapperBody"
  }, _react.default.createElement("div", {
    className: "questionModal"
  }, _react.default.createElement(_InstantFeedback.default, {
    question: question,
    showInstantFeedback: showInstantFeedback,
    correctAnswer: correctAnswer,
    incorrectAnswer: incorrectAnswer
  })), _react.default.createElement("div", null, appLocale.question, " ", currentQuestionIndex + 1, ":"), _react.default.createElement("h3", {
    dangerouslySetInnerHTML: (0, _helpers.rawMarkup)(question && question.question)
  }), question && question.questionPic && _react.default.createElement("img", {
    src: question.questionPic,
    alt: "image"
  }), question && renderTags(answerSelectionTypeState, question.correctAnswer.length, question.segment), question && renderAnswers(question, buttons), showNextQuestionButton && _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: function onClick() {
      return nextQuestion(currentQuestionIndex);
    },
    className: "nextQuestionBtn btn"
  }, appLocale.nextQuestionBtn))), endQuiz && showDefaultResultState && customResultPage === undefined && renderResult(), endQuiz && !showDefaultResultState && customResultPage !== undefined && customResultPage(questionSummary));
};

Core.propTypes = {
  questions: _propTypes.default.array,
  showDefaultResult: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  customResultPage: _propTypes.default.func,
  showInstantFeedback: _propTypes.default.bool,
  continueTillCorrect: _propTypes.default.bool,
  appLocale: _propTypes.default.object
};
var _default = Core;
exports.default = _default;