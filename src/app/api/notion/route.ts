import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { dbid } = await request.json();
    const res = await notion.databases.query({
      database_id: dbid,
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(
      { error: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
