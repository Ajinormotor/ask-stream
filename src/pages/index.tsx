import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} font-sans p-6`}>
      {/* HEAD SECTION */}
      <Head>
        <title>Ask Stream | an AI chat bot</title>
        <link rel="icon" href="/pepermint-logo-black.png" />
      </Head>

      <header className="flex items-center gap-4 mb-6">
        <Image
          src="/pepermint-logo-black.png"
          alt="Peppermint Logo"
          width={48}
          height={48}
        />
        <h1 className="text-2xl font-bold">Ask Stream</h1>
      </header>

     
      <main>
        <h2 className="text-lg">Landing Page</h2>
        <p>Welcome to Ask Stream, your AI chatbot!</p>
      </main>
    </div>
  );
}
