import React from 'react';
import { useMath } from '../contexts/MathContext';

const Garden = () => {
  const { score, consecutiveCorrect, gardenProgress } = useMath();

  const getFlowerStage = (progress: number) => {
    if (progress >= 80) return "🌸";
    if (progress >= 50) return "🌷";
    if (progress >= 30) return "🌿";
    return "🌱";
  };

  const achievements = [
    {
      id: 1,
      flower: getFlowerStage(gardenProgress),
      title: "서현이의 첫 번째 꽃",
      description: `현재 성장도: ${gardenProgress}%`,
      progress: gardenProgress
    },
    {
      id: 2,
      flower: "🌟",
      title: "획득한 점수",
      description: `총 점수: ${score}점`,
      highlight: true
    },
    {
      id: 3,
      flower: "✨",
      title: "연속 정답",
      description: `${consecutiveCorrect}문제 연속 정답!`,
      highlight: consecutiveCorrect > 2
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        서현이의 수학정원
      </h1>
      
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-600">
          서현이가 문제를 풀 때마다 예쁜 꽃이 자라나요!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center
              ${achievement.highlight ? 'ring-2 ring-purple-400' : ''}`}
          >
            <div className="text-4xl mb-4">{achievement.flower}</div>
            <h2 className="text-xl font-bold text-purple-600 mb-2">
              {achievement.title}
            </h2>
            <p className="text-gray-600">
              {achievement.description}
            </p>
            {'progress' in achievement && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {consecutiveCorrect >= 3 && (
        <div className="mt-8 text-center p-4 bg-yellow-100 rounded-lg">
          <p className="text-yellow-800 font-bold">
            대단해요! {consecutiveCorrect}문제를 연속으로 맞추셨어요! 🎉
          </p>
        </div>
      )}
    </div>
  );
};

export default Garden; 