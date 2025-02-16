"use server";

import { redirect } from "next/navigation";

export const nextQuizSubmit = async (db_id: string, num: number) => {
  redirect(`/quiz/${db_id}/${Number(num) + 1}`);
};
