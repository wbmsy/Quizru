"use server";

import { headers } from "next/headers";

export const makeApiBase = async () => {
  const headersData = headers();
  const host = (await headersData).get("host");
  const protocol =
    (await headersData).get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const apiBase = `${protocol}://${host}`;

  return apiBase;
};
