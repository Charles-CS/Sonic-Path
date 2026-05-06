import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SonicPath: A Ride to Read",
  description: "A dyslexia-focused phonics adventure game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} font-sans antialiased text-slate-800`} suppressHydrationWarning>
        <Background />
        {children}
      </body>
    </html>
  );
}
