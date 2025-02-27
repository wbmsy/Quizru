import { notFound } from "next/navigation";
import DatabaseList from "../../../../features/quiz/components/DatabaseList";
import QuizPage from "../../../../features/quiz/QuizPage";
import {
  getQuizDatabase,
  getQuizListData,
  judgeDBorQuiz,
} from "@/features/quiz/getDatabaseProperties";

const Quiz = async ({
  params,
  searchParams,
}: {
  params: Promise<{ db_id: string; num?: string }>;
  searchParams: Promise<{ prev_db_id?: string }>;
}) => {
  const { db_id, num } = await params;
  const { prev_db_id } = await searchParams;

  const DBorQuiz = await judgeDBorQuiz(db_id);
  switch (DBorQuiz) {
    case "DB":
      const { QuizDatabase } = await getQuizDatabase(db_id);
      return (
        <DatabaseList
          QuizDatabase={QuizDatabase}
          db_id={db_id}
          prev_db_id={prev_db_id}
        />
      );
    case "Quiz":
      console.warn(
        "データベースが設定されていない要素があります。自動的にクイズデータとして扱います。意図していない場合は修正してください。"
      );
      const { QuizListData } = await getQuizListData(db_id);
      return (
        <QuizPage
          QuizListData={QuizListData}
          db_id={db_id}
          prev_db_id={prev_db_id}
          num={num ? parseInt(num) : undefined}
        />
      );
    default:
      return notFound();
  }
};

export default Quiz;
