import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeFlow - 记录时间，管理生活",
  description: "简洁高效的时间记录应用，帮助你追踪日常活动，记录健康数据，更好地管理时间。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
