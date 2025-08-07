import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// let balloonSpawnInterval = 1000;

// function SpawnBalloon() {

// }

// window.onload = function() {
//   setInterval(SpawnBalloon, balloonSpawnInterval);
//   return;
// }

export const metadata: Metadata = {
  title: "Benjamin Levy - Portfolio",
  description: "Benjamin Levy's portfolio website featuring software and games he has worked on.",
  creator: "Benjamin Levy",
  keywords: ['Portfolio', 'Benjamin Levy', 'Ben', 'Levy', 'Game', 'Software', 'Web', 'Development', 'Full Stack', 
    'WPI', 'Computer Science', 'CS', 'Interactive Media & Game Development', 'IMGD', ],
  icons: {
    icon: [
      {url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96'},
      {url: '/favicon/favicon.svg', type: 'image/svg+xml'},
    ],
    shortcut: ['/favicon/favicon.ico'],
    apple: [
      {url: '/favicon/apple-touch-icon.png', sizes: '180x180'},
    ],
    other: [
      {rel: 'manifest', url: '/favicon/site.webmanifest'},
    ],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <div className="middle-column">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
