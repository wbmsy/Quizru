import { redirect } from "next/navigation";
import QuizForm from "./components/QuizForm";

const QuizPage: React.FC<{
  QuizListData: QuizListData[];
  db_id: string;
  prev_db_id?: string;
  num?: number;
}> = ({ QuizListData, db_id, prev_db_id, num = 1 }) => {
  if (1 <= num && num <= QuizListData.length) {
    return (
      <QuizForm
        title={QuizListData[num - 1].title}
        imageURL={QuizListData[num - 1].imageURL}
        default_format={QuizListData[num - 1].default_format}
        option={QuizListData[num - 1].option}
        placeholder="回答を入力"
        db_id={db_id}
        prev_db_id={prev_db_id}
        num={num}
      />
    );
  } else {
    if (prev_db_id) {
      redirect(`/quiz/${prev_db_id}`);
    } else {
      redirect("/quiz");
    }
  }
};

export default QuizPage;
