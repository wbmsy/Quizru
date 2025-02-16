import "./quiz.css";

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
