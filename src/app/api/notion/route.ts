import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { db_id } = await request.json();
    const res = await notion.databases.query({
      database_id: db_id,
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
