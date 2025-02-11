"use client";

import FormCard from "@/features/quiz/components/FormCard";
import DBFormSubmit from "@/features/quiz/DBFormSubmit";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const dataBaseID = Object.fromEntries(searchParams ?? []).dbid || "";

  return (
    <>
      <FormCard
        title="データベース接続"
        imageURL="none"
        default_format="write"
        option={[]}
        labelText="データベースIDを入力してください"
        value={dataBaseID}
        placeholder="例）191117333d7580c695b8ec3bbdb91979"
        onSubmit={DBFormSubmit}
      />
    </>
  );
}
