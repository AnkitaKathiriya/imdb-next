import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB clone",
  description: "this is a movie database clone ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        <Header/>
        
        <h1 style={{backgroundColor:'red'}}>get Ready</h1>
      </body>
    </html>
  );
}

