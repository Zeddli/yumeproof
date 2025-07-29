import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YumeProof",
  description: "Proof-of-Concept Android Mobile Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-sky-50 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}