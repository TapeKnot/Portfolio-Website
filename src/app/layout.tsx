import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Levy - Portfolio",
  description: "Take a look at my projects!",
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
        <div className="header-space"/>
        <div className="row">
          <div className="edge-column"/>
          <div className="middle-column">{children}</div>
          <div className="edge-column"/>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
