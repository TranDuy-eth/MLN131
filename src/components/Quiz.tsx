import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Home,
} from 'lucide-react'
import questionsData from '../data/questions.json'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  shuffledOptions?: string[]
  shuffledCorrect?: number
}

interface QuizResult {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
}

const Quiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number
  }>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  // Hàm shuffle đáp án cho mỗi câu hỏi
  const shuffleOptions = (question: Question): Question => {
    const optionsWithIndex = question.options.map((option, index) => ({
      option,
      index,
    }))

    // Shuffle đáp án
    const shuffled = optionsWithIndex.sort(() => Math.random() - 0.5)

    // Tìm vị trí mới của đáp án đúng
    const newCorrectIndex = shuffled.findIndex(
      (item) => item.index === question.correct
    )

    return {
      ...question,
      shuffledOptions: shuffled.map((item) => item.option),
      shuffledCorrect: newCorrectIndex,
    }
  }

  // Hàm chọn ngẫu nhiên 20 câu hỏi từ 100 câu và shuffle đáp án
  const selectRandomQuestions = () => {
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 20)
    // Shuffle đáp án cho mỗi câu hỏi
    return selected.map((q) => shuffleOptions(q))
  }

  // Khởi tạo quiz mới
  const initializeQuiz = () => {
    const randomQuestions = selectRandomQuestions()
    setSelectedQuestions(randomQuestions)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setQuizResults([])
    setIsQuizStarted(true)
  }

  // Xử lý chọn đáp án
  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerIndex,
    }))
  }

  // Chuyển câu hỏi tiếp theo
  const nextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // Quay lại câu hỏi trước
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  // Hoàn thành quiz
  const finishQuiz = () => {
    const results: QuizResult[] = selectedQuestions.map((question, index) => ({
      questionId: question.id,
      selectedAnswer: selectedAnswers[index] ?? -1,
      isCorrect:
        selectedAnswers[index] ===
        (question.shuffledCorrect ?? question.correct),
    }))

    setQuizResults(results)
    setShowResults(true)
  }

  // Tính điểm
  const calculateScore = () => {
    const correctAnswers = quizResults.filter(
      (result) => result.isCorrect
    ).length
    return {
      correct: correctAnswers,
      total: quizResults.length,
      percentage: Math.round((correctAnswers / quizResults.length) * 100),
    }
  }

  // Khởi tạo quiz khi component mount
  useEffect(() => {
    if (!isQuizStarted) {
      initializeQuiz()
    }
  }, [])

  if (!isQuizStarted || selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang chuẩn bị bài quiz...</p>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const getScoreColor = (percentage: number) => {
      if (percentage >= 80) return 'text-green-600'
      if (percentage >= 60) return 'text-yellow-600'
      return 'text-red-600'
    }

    const getScoreMessage = (percentage: number) => {
      if (percentage >= 90) return 'Xuất sắc! 🎉'
      if (percentage >= 80) return 'Rất tốt! 👏'
      if (percentage >= 70) return 'Khá tốt! 👍'
      if (percentage >= 60) return 'Trung bình 📚'
      return 'Cần cố gắng thêm! 💪'
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Kết quả bài quiz
              </h2>
              <div
                className={`text-6xl font-bold mb-4 ${getScoreColor(
                  score.percentage
                )}`}
              >
                {score.percentage}%
              </div>
              <p className="text-xl text-gray-600 mb-2">
                {score.correct}/{score.total} câu đúng
              </p>
              <p className="text-lg font-semibold text-gray-700">
                {getScoreMessage(score.percentage)}
              </p>
            </div>

            <div className="grid gap-4 mb-8">
              {selectedQuestions.map((question, index) => {
                const result = quizResults[index]
                const isAnswered = result.selectedAnswer !== -1
                const isCorrect = result.isCorrect

                return (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      {isAnswered ? (
                        isCorrect ? (
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        )
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Câu {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2">
                          {(question.shuffledOptions ?? question.options).map(
                            (option, optionIndex) => {
                              const isSelected =
                                result.selectedAnswer === optionIndex
                              const isCorrectOption =
                                optionIndex ===
                                (question.shuffledCorrect ?? question.correct)

                              let optionClass = 'p-3 rounded-lg border '
                              if (isCorrectOption) {
                                optionClass +=
                                  'bg-green-100 border-green-500 text-green-800'
                              } else if (isSelected && !isCorrect) {
                                optionClass +=
                                  'bg-red-100 border-red-500 text-red-800'
                              } else {
                                optionClass +=
                                  'bg-gray-50 border-gray-200 text-gray-700'
                              }

                              return (
                                <div key={optionIndex} className={optionClass}>
                                  <span className="font-medium mr-2">
                                    {String.fromCharCode(65 + optionIndex)}.
                                  </span>
                                  {option}
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={initializeQuiz}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Làm bài quiz mới
                </button>
                <Link
                  to="/"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100
  const answeredQuestions = Object.keys(selectedAnswers).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header với progress bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm font-medium"
              >
                <Home className="w-4 h-4" />
                Trang chủ
              </Link>
              <span className="text-gray-300">|</span>
              <h1 className="text-2xl font-bold text-gray-800">
                Quiz Chủ nghĩa Xã hội
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Câu {currentQuestionIndex + 1} / {selectedQuestions.length}
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            Đã trả lời: {answeredQuestions}/{selectedQuestions.length} câu
          </div>
        </div>

        {/* Câu hỏi */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {(currentQuestion.shuffledOptions ?? currentQuestion.options).map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="font-semibold mr-3 text-indigo-600">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              )
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              <ChevronLeft className="w-5 h-5" />
              Câu trước
            </button>

            <div className="flex gap-3">
              {currentQuestionIndex === selectedQuestions.length - 1 ? (
                <button
                  onClick={finishQuiz}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Hoàn thành
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Câu tiếp
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
