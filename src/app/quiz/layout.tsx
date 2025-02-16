import "./quiz.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-200">
      {children}
    </div>
  );
}
