// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // CSS ko load karne ke liye zaroori import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "Futuristic education platform student prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#09090b] text-zinc-100 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
