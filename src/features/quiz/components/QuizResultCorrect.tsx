import { nextQuizSubmit } from "../nextQuizSubmit";
import { motion } from "framer-motion";

const QuizResultCorrect: React.FC<{
  db_id: string;
  num: number;
}> = ({ db_id, num }) => {
  const nextQuizSubmitWithValues = nextQuizSubmit.bind(null, db_id, num);

  return (
    <motion.div
      className="w-screen h-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-500 mb-4">正解です！</h1>
          <form action={nextQuizSubmitWithValues}>
            <button className="inline-block text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-lg font-semibold">
              次の問題へ
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizResultCorrect;
