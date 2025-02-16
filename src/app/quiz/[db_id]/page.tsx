import { notFound } from "next/navigation";
import DatabaseList from "../../../features/quiz/components/DatabaseList";
import QuizPage from "../../../features/quiz/QuizPage";
import {
  getQuizDatabase,
  getQuizListData,
  judgeDBorQuiz,
} from "@/features/quiz/getDatabaseProperties";

const Quiz = async ({
  params,
  searchParams,
}: {
  params: { db_id: string };
  searchParams: { num: number };
}) => {
  const { db_id } = await params;
  const { num = undefined } = await searchParams;

  const DBorQuiz = await judgeDBorQuiz(db_id);
  switch (DBorQuiz) {
    case "DB":
      const { QuizDatabase } = await getQuizDatabase(db_id);
      return <DatabaseList QuizDatabase={QuizDatabase} />;
    case "Quiz":
      console.warn(
        "データベースが設定されていない要素があります。自動的にクイズデータとして扱います。意図していない場合は修正してください。"
      );
      const { QuizListData } = await getQuizListData(db_id);
      return <QuizPage QuizListData={QuizListData} db_id={db_id} num={num} />;
    default:
      return notFound();
  }
};

export default Quiz;
