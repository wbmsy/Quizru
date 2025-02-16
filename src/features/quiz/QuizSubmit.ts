import { getQuizCorrectAnswer } from "./getDatabaseProperties";

const QuizSubmit = async (
  db_id: string,
  num: number,
  formData: FormData
): Promise<boolean> => {
  const inputValue = (formData.get("text") as string) || null;
  const radioValue = (formData.get("radio") as string) || null;

  const rightArray = await getQuizCorrectAnswer(db_id, num);

  if (inputValue) {
    for (let i = 0; i < rightArray.length; i++) {
      if (inputValue === rightArray[i]) {
        return true;
      }
    }
  }
  if (radioValue) {
    for (let i = 0; i < rightArray.length; i++) {
      if (radioValue === rightArray[i]) {
        return true;
      }
    }
  }
  return false;
};

export default QuizSubmit;
