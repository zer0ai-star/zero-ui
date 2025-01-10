import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import "./globals.css";
import GoogleAnalytics from "./_components/googleAnalytics";

const inter = Nunito_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Zer0.ai",
  description: "Zer0.ai",
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
        <GoogleAnalytics/>
      </body>
    </html>
  );
}
