import React from "react";

const QuizFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  default_format: string,
  rightArray: string[],
  setResult: React.Dispatch<
    React.SetStateAction<{ isCorrect: boolean; answer?: string }>
  >
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  if (default_format == "write") {
    const input = form.querySelector("input[type='text']") as HTMLInputElement;

    if (input.value) {
      let isCorrect = false;
      for (let i = 0; i < rightArray.length; i++) {
        if (input.value === rightArray[i]) {
          isCorrect = true;
          break;
        }
      }
      setResult({ isCorrect });
    }
  } else if (default_format == "select") {
    const radio = form.querySelectorAll(
      'input[name="radio"]:checked'
    ) as NodeListOf<HTMLInputElement>;
    console.log(radio);
    if (radio[0]) {
      let answer = radio[0].id || "";

      let isCorrect = false;

      for (let i = 0; i < rightArray.length; i++) {
        if (answer === rightArray[i]) {
          isCorrect = true;
          break;
        }
      }
      setResult({ isCorrect });
    }
  }
};

export default QuizFormSubmit;
