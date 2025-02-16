import { notFound } from "next/navigation";
import QuizForm from "./components/QuizForm";

const QuizPage: React.FC<{
  QuizListData: QuizListData[];
  db_id: string;
  num?: number;
}> = ({ QuizListData, db_id, num = 1 }) => {
  if (1 <= num && num <= QuizListData.length) {
    const quizForm = (
      <QuizForm
        title={QuizListData[num - 1].title}
        imageURL={QuizListData[num - 1].imageURL}
        default_format={QuizListData[num - 1].default_format}
        option={QuizListData[num - 1].option}
        placeholder="回答を入力"
        db_id={db_id}
        num={num}
      />
    );

    // const quizResult = (
    //   <QuizResult
    //     result={}
    //     rightArray={QuizListData[num - 1].rightArray}
    //     db_id={db_id}
    //     num={num}
    //   />
    // );

    return quizForm;
    // ?? quizResult
  } else {
    return notFound();
  }
};

export default QuizPage;
