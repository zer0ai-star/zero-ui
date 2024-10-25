import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import "./globals.css";

const inter = Nunito_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "ZerO.ai",
  description: "ZerO.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
