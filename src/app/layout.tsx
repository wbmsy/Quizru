import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizru",
  description: "Notionを活用したクイズサイトを提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
