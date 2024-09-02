import { Inter } from "next/font/google";
import clsx from 'clsx';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
  

export const metadata = {
  title: "Marco Valentino Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable,"bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
