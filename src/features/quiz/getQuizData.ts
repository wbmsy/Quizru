import { notFound } from "next/navigation";
import { makeApiBase } from "../makeApiBase";

const getQuizData = async (db_id: string) => {
  const apiBase = await makeApiBase();
  const res = await fetch(`${apiBase}/api/notion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ db_id }),
    next: { revalidate: 3600 },
  });
  if (res.status == 500) {
    return notFound();
  } else {
    return res.json();
  }
};

export default getQuizData;
