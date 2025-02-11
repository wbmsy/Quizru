import getQuizData from "@/features/quiz/getQuizData";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import DatabaseList from "../../../../features/quiz/components/DatabaseList";
import getDatabaseProperties from "@/features/quiz/getDatabaseProperties";
import QuizPage from "../../../../features/quiz/QuizPage";

const Quiz = async ({ params }: { params: { dbid: string; num: number } }) => {
  const { dbid, num } = params;

  const headersData = headers();
  const host = (await headersData).get("host");
  const protocol =
    (await headersData).get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  const apiBase = `${protocol}://${host}`;

  const getStaticProps: () => Promise<{
    props: { res: any };
    revalidate: number;
  }> = async () => {
    const res = await getQuizData(apiBase, dbid);
    return {
      props: {
        res,
      },
      revalidate: 120,
    };
  };

  const props = await getStaticProps();
  const res = props.props.res;

  if (res !== "error") {
    const { isAllHasDB, DB, QuizList } =
      (await getDatabaseProperties(res)) ?? {};
    // console.log("isAllHasDB", isAllHasDB, "DB", DB, "QuizList", QuizList);
    if (isAllHasDB == true && DB) {
      return <DatabaseList Database={DB} />;
    } else if (isAllHasDB == false && QuizList) {
      return <QuizPage QuizList={QuizList} num={num} dbid={dbid} />;
    } else {
      console.error("予期せぬエラーが発生しました。");
    }
  } else {
    return notFound();
  }
};

export default Quiz;
