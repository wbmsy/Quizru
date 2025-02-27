"use server";

import { redirect } from "next/navigation";

export const nextQuizSubmit = async (
  db_id: string,
  prev_db_id: string | undefined,
  num: number
) => {
  if (prev_db_id) {
    redirect(`/quiz/${db_id}/${Number(num) + 1}?prev_db_id=${prev_db_id}`);
  } else {
    redirect(`/quiz/${db_id}/${Number(num) + 1}`);
  }
};
