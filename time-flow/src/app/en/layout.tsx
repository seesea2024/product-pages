import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "TimeFlow - Track time, manage life",
  description: "Simple and efficient time tracking app to help you track daily activities, record health data, and manage your time better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
