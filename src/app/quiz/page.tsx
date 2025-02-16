import { redirect } from "next/navigation";

const Submit = async (formData: FormData) => {
  "use server";
  const db_id = formData.get("DataBaseID") as string;
  redirect(`/quiz/${db_id}`);
};

const Quiz = async ({
  searchParams,
}: {
  searchParams: Promise<{ db_id: string }>;
}) => {
  const { db_id } = await searchParams;
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          データベース接続
        </h2>
        <form action={Submit}>
          <label
            className="block text-gray-700 text-md font-semibold mb-2"
            htmlFor="text"
          >
            データベースIDを入力してください
          </label>
          <div className="mb-4">
            <input
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 font-medium"
              type="text"
              defaultValue={db_id}
              placeholder="例）191117333d7580c695b8ec3bbdb91979"
              id="text"
              name="DataBaseID"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
            送信する
          </button>
        </form>
      </div>
    </>
  );
};

export default Quiz;
