import ListImage from "@/components/UI/quiz/ListImage";
import Link from "next/link";
import React from "react";

const DatabaseList: React.FC<{
  QuizDatabase: QuizDatabase[];
  db_id: string;
  prev_db_id?: string;
}> = ({ QuizDatabase, db_id, prev_db_id }) => {
  if (prev_db_id) {
    return (
      <>
        <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[1000px] max-h-[80%] mx-auto border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            クイズ一覧
          </h2>
          <div className="max-h-[90%] grid grid-flow-row grid-cols-1 md:grid-cols-2 overflow-auto">
            {QuizDatabase.map((item, index) => (
              <Link
                key={index}
                href={`/quiz/${item.data.db_id}/1?prev_db_id=${prev_db_id}`}
                className="w-full place-items-center"
              >
                <ListImage
                  listTitle={item.title}
                  imageURL={item.imageURL || "/NO-IMAGE.jpg"}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[1000px] max-h-[80%] mx-auto border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            クイズ一覧
          </h2>
          <div className="max-h-[90%] grid grid-flow-row grid-cols-1 md:grid-cols-2 overflow-auto">
            {QuizDatabase.map((item, index) => (
              <Link
                key={index}
                href={`/quiz/${item.data.db_id}/1?prev_db_id=${db_id}`}
                className="w-full place-items-center"
              >
                <ListImage
                  listTitle={item.title}
                  imageURL={item.imageURL || "/NO-IMAGE.jpg"}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default DatabaseList;
