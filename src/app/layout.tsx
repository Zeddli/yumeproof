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
      <body className="antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-sky-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}