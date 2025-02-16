import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getQuizCorrectAnswer } from "../getDatabaseProperties";

const nextQuizSubmit = (db_id: string, num: number) => {
  redirect(`/quiz/${db_id}/?num=${Number(num) + 1}`);
};

const QuizResultInCorrect: React.FC<{
  db_id: string;
  num: number;
}> = ({ db_id, num }) => {
  const [quizCorrectAnswer, setQuizCorrectAnswer] = useState<string[]>([]);

  useEffect(() => {
    const fetchCorrectAnswer = async () => {
      const answers = await getQuizCorrectAnswer(db_id, num);
      setQuizCorrectAnswer(answers);
    };
    fetchCorrectAnswer();
  }, []);

  const nextQuizSubmitWithValues = nextQuizSubmit.bind(null, db_id, num);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500 mb-4">&times;</h1>
        <p className="text-lg text-gray-700 mb-8">
          残念！正しい答えは{" "}
          <span className="inline-block font-bold underline decoration-wavy underline-offset-[6px] decoration-2 decoration-indigo-900 mt-1 mb-3 px-2">
            {quizCorrectAnswer.join("、 ")}{" "}
          </span>
          です。
        </p>
        <form action={nextQuizSubmitWithValues}>
          <button className="inline-block text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-lg font-semibold">
            次の問題へ
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizResultInCorrect;
