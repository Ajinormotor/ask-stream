import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarGroup } from "@/components/ui/sidebar";
import Layout from "@/components/layouts";
import Bookmark from "@/components/stream/bookmark";
import Sections from "@/components/stream/sections";

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
<div>
  <h1>Landing-page</h1>
</div>
  );
}
