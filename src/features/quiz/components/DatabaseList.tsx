import ListImage from "@/components/UI/quiz/ListImage";
import Link from "next/link";
import React from "react";

const DatabaseList: React.FC<{ QuizDatabase: QuizDatabase[] }> = ({
  QuizDatabase,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[1000px] max-h-[80%] mx-auto border border-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          データベース一覧
        </h2>
        <div className="max-h-[90%] grid grid-flow-row grid-cols-1 md:grid-cols-2 place-items-center overflow-auto">
          {QuizDatabase.map((item, index) => (
            <Link key={index} href={`/quiz/${item.data.db_id}`}>
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
};

export default DatabaseList;
