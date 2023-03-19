import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [countAnswers, setCountAnswers] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersClickable, setAnswersClickable] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [countQuestions, setCountQuestions] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:8060/quotes").then((response) => {
      setQuestions(response.data);
      console.log(questions);
    });
  }, []);

  const handleAnswerClick = (answer) => {
    if (!answersClickable) {
      return;
    }
    if (answer === questions[currentQuestion].character && score < 5) {
      setShowCorrect(true);
      setScore(score + 1);
    } else {
      setShowCorrect(false);
    }
    setCountAnswers(countAnswers + 1);
    if (countAnswers === 4) {
      setShowFinishButton(true);
    } else {
      setShowNextQuestionButton(true);
    }
    setAnswersClickable(false);
  };

  const handleNextQuestionClick = () => {
    setCountQuestions(countQuestions + 1);
    setShowNextQuestionButton(false);
    setShowCorrect(false);
    if (countAnswers === 5) {
      setShowFinishButton(true);
      return;
    }
    let nextQuestion = Math.floor(Math.random() * questions.length);
    while (
      nextQuestion === currentQuestion ||
      askedQuestions.includes(nextQuestion)
    ) {
      nextQuestion = Math.floor(Math.random() * questions.length);
    }
    setCurrentQuestion(nextQuestion);
    setAnswersClickable(true);
    setAskedQuestions([...askedQuestions, currentQuestion]);
  };

  const handleFinishClick = () => {
    setQuizFinished(true);
  };

  return (
    <div className="app">
      {quizFinished ? <Result score={score} /> : null}
      <div className={quizFinished ? "hidden" : ""}>
        <Header />
        <div className={showResult ? "hidden" : ""}>
          <Hero
            setShowResult={setShowResult}
            score={score}
            showResult={showResult}
          />
        </div>
        <Quiz
          showResult={showResult}
          setShowResult={setShowResult}
          score={score}
          setScore={setScore}
          handleFinishClick={handleFinishClick}
          handleAnswerClick={handleAnswerClick}
          handleNextQuestionClick={handleNextQuestionClick}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setShowCorrect={setShowCorrect}
          showCorrect={showCorrect}
          countAnswers={countAnswers}
          setCountAnswers={setCountAnswers}
          setShowNextQuestionButton={setShowNextQuestionButton}
          showNextQuestionButton={showNextQuestionButton}
          setShowFinishButton={setShowFinishButton}
          showFinishButton={showFinishButton}
          questions={questions}
          answersClickable={answersClickable}
          countQuestions={countQuestions}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
