"use client";

import QuizSubmit from "@/features/quiz/QuizSubmit";
import React, { useState } from "react";
import QuizResultInCorrect from "./QuizResultInCorrect";
import QuizResultCorrect from "./QuizResultCorrect";
import { motion } from "framer-motion";

interface FormProps {
  title: string;
  imageURL: string;
  default_format: string;
  option: string[];
  placeholder: string;
  db_id: string;
  num: number;
}

const QuizForm: React.FC<FormProps> = ({
  title,
  imageURL,
  default_format,
  option,
  placeholder,
  db_id,
  num,
}) => {
  const [result, setResult] = useState<boolean | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const isCorrect = await QuizSubmit(db_id, num, formData);
    setResult(isCorrect);
  };

  switch (result) {
    case true:
      return <QuizResultCorrect db_id={db_id} num={num} />;
    case false:
      return <QuizResultInCorrect db_id={db_id} num={num} />;
    default:
      return (
        <>
          <motion.div
            className="w-screen h-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {title}
              </h2>
              {imageURL != "none" && (
                <img
                  className="w-full h-auto mb-4"
                  src={imageURL}
                  alt={title}
                />
              )}
              {default_format == "write" && (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 font-medium"
                        type="text"
                        placeholder={placeholder}
                        name="text"
                      />
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                      送信する
                    </button>
                  </form>
                </>
              )}
              {default_format == "select" && (
                <>
                  <form onSubmit={handleSubmit}>
                    {option
                      .sort(() => Math.random() - 0.5)
                      .map((item, index) => (
                        <div key={index} className="mb-4">
                          <label
                            htmlFor={item}
                            className="flex items-center space-x-4 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer"
                          >
                            <input
                              className="form-radio h-6 w-6 text-blue-600 transition duration-150 ease-in-out"
                              type="radio"
                              name="radio"
                              id={item}
                              value={item}
                            />
                            <span className="block text-base font-semibold text-gray-800">
                              {item}
                            </span>
                          </label>
                        </div>
                      ))}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                      送信する
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      );
  }
};

export default QuizForm;
