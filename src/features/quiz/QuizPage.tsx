"use client";

import FormCard from "@/features/quiz/components/FormCard";
import React, { useState } from "react";
import QuizFormSubmit from "./QuizFormSubmit";
import { notFound } from "next/navigation";
import nextQuizSubmit from "./nextQuizSubmit";

const QuizPage = ({ QuizList, num = 1, dbid }) => {
  const [result, setResult] = useState<{
    isCorrect: boolean;
  } | null>(null);

  if (0 < num && num <= QuizList.length) {
    if (result) {
      return (
        <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
          {result.isCorrect ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-green-500 mb-4">
                正解です！
              </h1>
              <button
                className="inline-block text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-lg font-semibold"
                onClick={(e) => nextQuizSubmit(e, dbid, num)}
              >
                次の問題へ
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-7xl font-bold text-red-500 mb-4">&times;</h1>
              <p className="text-lg text-gray-700 mb-8">
                残念！正しい答えは{" "}
                <p className="inline-block font-bold underline decoration-wavy underline-offset-[6px] decoration-2 decoration-indigo-900 mt-1 mb-3 px-2">
                  {QuizList[num - 1].rightArray.join("、 ")}{" "}
                </p>
                です。
              </p>
              <button
                className="inline-block text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-lg font-semibold"
                onClick={(e) => nextQuizSubmit(e, dbid, num)}
              >
                次の問題へ
              </button>
            </div>
          )}
        </div>
      );
    }
    return (
      <>
        <FormCard
          title={QuizList[num - 1].title}
          imageURL={QuizList[num - 1].imageURL}
          default_format={QuizList[num - 1].default_format}
          option={QuizList[num - 1].option}
          labelText=""
          value=""
          placeholder="回答を入力"
          onSubmit={(e) =>
            QuizFormSubmit(
              e,
              QuizList[num - 1].default_format,
              QuizList[num - 1].rightArray,
              setResult
            )
          }
        />
      </>
    );
  } else {
    return notFound();
  }
};

export default QuizPage;
