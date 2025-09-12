import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface FlashcardData {
  id: string;
  front: string;
  back: string;
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

const Flashcards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const cards: FlashcardData[] = [
    {
      id: '1',
      front: 'Điều kiện kinh tế ra đời CNXH',
      back: 'Sự phát triển cao độ của lực lượng sản xuất trong chế độ tư bản chủ nghĩa, tạo ra những mâu thuẫn không thể giải quyết được trong khuôn khổ quan hệ sản xuất tư bản chủ nghĩa.',
      quiz: {
        question: 'Điều kiện kinh tế cơ bản để CNXH ra đời là gì?',
        options: [
          'Sự phát triển của công nghệ thông tin',
          'Sự phát triển cao độ của lực lượng sản xuất trong CNTB',
          'Sự xuất hiện của giai cấp tư sản',
          'Sự phát triển của thương mại quốc tế'
        ],
        correct: 1,
        explanation: 'Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội cao độ và quan hệ sản xuất mang tính tư nhân đòi hỏi một chế độ mới.'
      }
    },
    {
      id: '2',
      front: 'Điều kiện xã hội ra đời CNXH',
      back: 'Sự hình thành và phát triển của giai cấp vô sản - lực lượng xã hội cách mạng có nhiệm vụ lịch sử xóa bỏ chế độ tư bản chủ nghĩa và xây dựng chế độ xã hội chủ nghĩa.',
      quiz: {
        question: 'Ai là lực lượng chủ yếu thực hiện cách mạng xã hội chủ nghĩa?',
        options: [
          'Giai cấp tư sản tiến bộ',
          'Giai cấp công nhân (vô sản)',
          'Giai cấp nông dân',
          'Tầng lớp trí thức'
        ],
        correct: 1,
        explanation: 'Giai cấp công nhân là lực lượng sản xuất chủ yếu, chịu sự bóc lột trực tiếp và có lợi ích gắn liền với việc xóa bỏ CNTB.'
      }
    },
    {
      id: '3',
      front: 'Điều kiện tư tưởng ra đời CNXH',
      back: 'Sự ra đời của học thuyết khoa học về chủ nghĩa xã hội do K. Marx và F. Engels sáng lập, cung cấp nền tảng lý luận khoa học cho phong trào cộng sản.',
      quiz: {
        question: 'Ai là người sáng lập học thuyết khoa học về CNXH?',
        options: [
          'V.I. Lenin',
          'K. Marx và F. Engels',
          'Hồ Chí Minh',
          'Mao Trạch Đông'
        ],
        correct: 1,
        explanation: 'K. Marx và F. Engels đã sáng lập chủ nghĩa Mác và lý thuyết khoa học về CNXH vào giữa thế kỷ 19.'
      }
    },
    {
      id: '4',
      front: 'Điều kiện chính trị ra đời CNXH',
      back: 'Sự xuất hiện của các tổ chức chính trị của giai cấp công nhân (đảng cộng sản), lãnh đạo giai cấp và nhân dân lao động đấu tranh giành chính quyền.',
      quiz: {
        question: 'Tổ chức chính trị nào lãnh đạo cách mạng xã hội chủ nghĩa?',
        options: [
          'Liên hiệp công đoán',
          'Đảng Cộng sản',
          'Chính phủ tư sản',
          'Các tổ chức xã hội dân sự'
        ],
        correct: 1,
        explanation: 'Đảng Cộng sản là tổ chức tiên phong của giai cấp công nhân, lãnh đạo đấu tranh cách mạng.'
      }
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
    resetCard();
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    resetCard();
  };

  const resetCard = () => {
    setIsFlipped(false);
    setShowQuiz(false);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setQuizCompleted(true);
  };

  const isCorrect = selectedAnswer === cards[currentCard].quiz.correct;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Interactive Learning Cards</h2>
          <p className="opacity-90">Điều kiện ra đời Chủ nghĩa Xã hội</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-amber-100">
              Thẻ {currentCard + 1} / {cards.length}
            </span>
            <div className="flex space-x-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentCard ? 'bg-white' : 'bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8">
          {!showQuiz ? (
            <div className="min-h-80">
              <div
                className={`relative h-80 cursor-pointer transition-transform duration-700 preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">
                      {cards[currentCard].front}
                    </h3>
                    <p className="text-amber-600 text-sm">Click để xem chi tiết</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-green-800 text-lg leading-relaxed">
                      {cards[currentCard].back}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Lật thẻ
                </button>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Kiểm tra kiến thức
                </button>
              </div>
            </div>
          ) : (
            <div className="min-h-80">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-6">
                  {cards[currentCard].quiz.question}
                </h3>

                <div className="space-y-3">
                  {cards[currentCard].quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !quizCompleted && handleQuizAnswer(index)}
                      disabled={quizCompleted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        quizCompleted
                          ? index === cards[currentCard].quiz.correct
                            ? 'border-green-500 bg-green-100 text-green-800'
                            : index === selectedAnswer && index !== cards[currentCard].quiz.correct
                            ? 'border-red-500 bg-red-100 text-red-800'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                          : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-medium mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                        {quizCompleted && index === cards[currentCard].quiz.correct && (
                          <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                        )}
                        {quizCompleted && index === selectedAnswer && index !== cards[currentCard].quiz.correct && (
                          <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {quizCompleted && (
                  <div className={`mt-6 p-4 rounded-lg ${
                    isCorrect ? 'bg-green-100 border-2 border-green-300' : 'bg-red-100 border-2 border-red-300'
                  }`}>
                    <div className="flex items-center mb-2">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      )}
                      <span className={`font-semibold ${
                        isCorrect ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {isCorrect ? 'Chính xác!' : 'Chưa chính xác!'}
                      </span>
                    </div>
                    <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                      {cards[currentCard].quiz.explanation}
                    </p>
                  </div>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    Quay lại thẻ học
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="bg-slate-50 px-8 py-4 flex justify-between items-center">
          <button
            onClick={prevCard}
            className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Trước
          </button>

          <button
            onClick={resetCard}
            className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            Reset
          </button>

          <button
            onClick={nextCard}
            className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            Sau
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Source Citation */}
      <div className="mt-8 bg-slate-100 rounded-lg p-6">
        <h4 className="font-semibold text-slate-800 mb-2">Nguồn tham khảo:</h4>
        <p className="text-slate-600 text-sm">
          Chủ nghĩa Xã hội Khoa học Mác - Lê nin, Phần I: Chủ nghĩa xã hội,
          Mục I.2: Điều kiện ra đời chủ nghĩa xã hội
        </p>
      </div>
    </div>
  );
};

export default Flashcards;