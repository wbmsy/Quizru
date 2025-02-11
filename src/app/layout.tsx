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
      <body>
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
          {children}
        </div>
      </body>
    </html>
  );
}
