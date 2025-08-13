import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

const questions: Question[] = [
  // A1 Level (3 questions)
  {
    id: 1,
    question: "What ___ your name?",
    options: ["is", "are", "am", "be"],
    correct: 0,
    level: 'A1'
  },
  {
    id: 2,
    question: "I ___ from Russia.",
    options: ["am", "is", "are", "be"],
    correct: 0,
    level: 'A1'
  },
  {
    id: 3,
    question: "She ___ work at 9 o'clock every day.",
    options: ["start", "starts", "starting", "to start"],
    correct: 1,
    level: 'A1'
  },

  // A2 Level (3 questions)
  {
    id: 4,
    question: "I ___ to the cinema last night.",
    options: ["go", "went", "gone", "going"],
    correct: 1,
    level: 'A2'
  },
  {
    id: 5,
    question: "There ___ many people at the party.",
    options: ["was", "were", "is", "are"],
    correct: 1,
    level: 'A2'
  },
  {
    id: 6,
    question: "I'm ___ than my sister.",
    options: ["tall", "taller", "tallest", "more tall"],
    correct: 1,
    level: 'A2'
  },

  // B1 Level (3 questions)
  {
    id: 7,
    question: "If I ___ you, I would study harder.",
    options: ["am", "was", "were", "be"],
    correct: 2,
    level: 'B1'
  },
  {
    id: 8,
    question: "I've been living here ___ 2018.",
    options: ["for", "since", "from", "at"],
    correct: 1,
    level: 'B1'
  },
  {
    id: 9,
    question: "The work ___ by tomorrow.",
    options: ["will finish", "will be finished", "will have finished", "will finishing"],
    correct: 1,
    level: 'B1'
  },

  // B2 Level (3 questions)
  {
    id: 10,
    question: "I wish I ___ more time to travel.",
    options: ["have", "had", "would have", "will have"],
    correct: 1,
    level: 'B2'
  },
  {
    id: 11,
    question: "The proposal ___ by the committee next week.",
    options: ["will discuss", "will be discussing", "will be discussed", "will have discussed"],
    correct: 2,
    level: 'B2'
  },
  {
    id: 12,
    question: "He ___ have been studying for hours.",
    options: ["should", "must", "could", "would"],
    correct: 1,
    level: 'B2'
  },

  // C1 Level (3 questions)
  {
    id: 13,
    question: "_____ the weather, we decided to cancel the picnic.",
    options: ["Despite", "Although", "Given", "Regardless"],
    correct: 2,
    level: 'C1'
  },
  {
    id: 14,
    question: "The research findings are ___ with our hypothesis.",
    options: ["consistent", "constant", "resistant", "persistent"],
    correct: 0,
    level: 'C1'
  },
  {
    id: 15,
    question: "Had I known about the traffic, I ___ earlier.",
    options: ["would leave", "would have left", "will leave", "had left"],
    correct: 1,
    level: 'C1'
  }
];

const levelDescriptions = {
  'A1': {
    title: 'Beginner (A1)',
    description: 'Отличное начало! 🌟',
    comment: 'Ты только начинаешь свой путь в английском, и это прекрасно! У тебя уже есть базовые знания, и с правильным подходом ты быстро достигнешь следующего уровня.',
    color: 'from-green-400 to-green-600'
  },
  'A2': {
    title: 'Elementary (A2)', 
    description: 'Очень неплохо! 💪',
    comment: 'У тебя хорошая база! Ты можешь общаться на простые темы. Сейчас самое время сделать рывок и перейти на уровень уверенного пользователя.',
    color: 'from-blue-400 to-blue-600'
  },
  'B1': {
    title: 'Intermediate (B1)',
    description: 'Впечатляюще! 🚀',
    comment: 'Ты уже можешь свободно общаться на многие темы! Твой уровень позволяет чувствовать себя уверенно в большинстве ситуаций. Пора довести до совершенства!',
    color: 'from-purple-400 to-purple-600'
  },
  'B2': {
    title: 'Upper-Intermediate (B2)',
    description: 'Превосходно! ⭐',
    comment: 'Твой английский на высоком уровне! Ты практически свободно владеешь языком. Осталось отшлифовать нюансы и стать настоящим экспертом.',
    color: 'from-orange-400 to-orange-600'
  },
  'C1': {
    title: 'Advanced (C1)',
    description: 'Выдающийся результат! 🏆',
    comment: 'Невероятно! Ты владеешь английским на продвинутом уровне. Ты можешь выражать сложные идеи и понимать тонкости языка. Поздравляю!',
    color: 'from-red-400 to-red-600'
  }
};

interface LevelTestProps {
  trigger?: React.ReactNode;
}

export function LevelTest({ trigger }: LevelTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [level, setLevel] = useState<keyof typeof levelDescriptions>('A1');
  const [isOpen, setIsOpen] = useState(false);

  const calculateLevel = (userAnswers: number[]) => {
    let score = 0;
    const levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++;
        levelScores[questions[index].level]++;
      }
    });

    // Определяем уровень на основе правильных ответов
    if (score <= 3) return 'A1';
    if (score <= 6) return 'A2';
    if (score <= 9) return 'B1';
    if (score <= 12) return 'B2';
    return 'C1';
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Test completed
      const finalLevel = calculateLevel(newAnswers);
      setLevel(finalLevel);
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setLevel('A1');
  };

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset test when dialog closes
      setTimeout(resetTest, 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="group relative bg-gradient-to-br from-amber-50 to-orange-100 text-amber-900 font-arsenal text-sm font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200/50 hover:border-amber-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-200/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              🎯 <span className="hidden sm:inline">Узнай свой уровень за 5 минут</span><span className="sm:hidden">Тест уровня</span>
            </span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-stone-50 to-amber-50/30 border-2 border-stone-200/50">
        <DialogHeader>
          <DialogTitle className="font-arsenal text-2xl text-center bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent font-bold">
            {showResult ? '✨ Результат теста' : '🎯 Тест уровня английского'}
          </DialogTitle>
        </DialogHeader>

        {!showResult ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-3 bg-gradient-to-r from-stone-100/50 to-amber-100/50 rounded-2xl p-4 border border-stone-200/30">
              <div className="flex justify-between text-sm font-arsenal text-amber-800">
                <span className="font-medium">Вопрос {currentQuestion + 1} из {questions.length}</span>
                <span className="font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="relative h-3 bg-gradient-to-r from-stone-200 to-amber-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="bg-gradient-to-br from-white to-stone-50/50 rounded-2xl p-6 border border-stone-200/40 shadow-lg">
              <h3 className="font-arsenal text-xl font-bold bg-gradient-to-r from-stone-800 to-amber-900 bg-clip-text text-transparent mb-6">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`group w-full p-4 text-left rounded-xl border-2 transition-all duration-300 font-arsenal relative overflow-hidden ${
                      selectedAnswer === index
                        ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-100 text-amber-900 shadow-lg'
                        : 'border-stone-200 bg-gradient-to-r from-white to-stone-50/30 hover:border-amber-300 hover:from-amber-50/50 hover:to-orange-50/30 text-stone-700 hover:text-amber-800 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                      selectedAnswer === index 
                        ? 'from-amber-100/50 to-orange-100/50 opacity-100' 
                        : 'from-amber-50/30 to-orange-50/30 opacity-0 group-hover:opacity-100'
                    }`}></div>
                    <span className="relative z-10">
                      <span className="font-bold mr-3 text-amber-600">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white font-arsenal font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border border-amber-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  {currentQuestion + 1 === questions.length ? '✨ Получить результат' : '➡️ Следующий вопрос'}
                </span>
              </Button>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-4 sm:space-y-6 text-center">
            {/* Level Badge */}
            <div className={`inline-block bg-gradient-to-r ${levelDescriptions[level].color} text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-white/20`}>
              <h3 className="font-arsenal text-xl sm:text-2xl font-bold drop-shadow-sm">
                {levelDescriptions[level].title}
              </h3>
            </div>

            {/* Result Description */}
            <div className="bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-2xl p-4 sm:p-6 border border-stone-200/40 shadow-lg">
              <h4 className="font-arsenal text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent mb-2 sm:mb-3">
                {levelDescriptions[level].description}
              </h4>
              <p className="font-anonymous text-sm sm:text-base text-stone-700 leading-relaxed">
                {levelDescriptions[level].comment}
              </p>
            </div>

            {/* Score */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-3 sm:p-4 border border-blue-200/40 shadow-sm">
              <p className="font-arsenal text-base sm:text-lg">
                <span className="font-bold text-blue-800">Правильных ответов:</span>{' '}
                <span className="text-blue-600 font-bold">{answers.filter((answer, index) => answer === questions[index].correct).length} из {questions.length}</span>
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 sm:p-6 border border-emerald-200/40 shadow-lg">
              <h4 className="font-arsenal text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-800 to-teal-800 bg-clip-text text-transparent mb-2 sm:mb-3">
                🚀 Готов подняться на следующий уровень?
              </h4>
              <p className="font-anonymous text-sm sm:text-base text-emerald-700 mb-3 sm:mb-4 leading-relaxed">
                Персональная программа поможет тебе быстро достичь твоих целей в английском!
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <a href="https://t.me/m/fEpHrZQfYTBi" target="_blank" rel="noopener noreferrer">
                  <Button className="group relative w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-arsenal text-base sm:text-lg font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-emerald-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-sm sm:text-base">⚡ ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК ⚡</span>
                  </Button>
                </a>
                
                <Button 
                  onClick={resetTest}
                  variant="outline"
                  className="group w-full font-arsenal text-stone-600 border-2 border-stone-300 hover:bg-gradient-to-r hover:from-stone-50 hover:to-amber-50/30 hover:border-amber-300 rounded-xl sm:rounded-2xl py-2 sm:py-3 transition-all duration-300"
                >
                  <span className="group-hover:text-amber-700 transition-colors duration-300 text-sm sm:text-base">🔄 Пройти тест заново</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}