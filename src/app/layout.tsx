import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: [
    "游ゴシック Medium",
    "Yu Gothic Medium",
    "游ゴシック体",
    "YuGothic",
    "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN",
    "メイリオ",
    "Meiryo",
    "verdana",
    "sans-serif",
  ],
});

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
    <html lang="ja" className={notoSansJp.className}>
      <body>{children}</body>
    </html>
  );
}
