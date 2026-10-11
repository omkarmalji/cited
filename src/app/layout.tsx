import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import "../generated/threeui.css";
import { Nav } from "@/components/nav";
import { METHOD } from "@/lib/types";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Cited | Does AI recommend your business?",
    template: "%s | Cited",
  },
  description:
    "Find out whether AI recommends your local business. See the sources. Approve the fixes.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    title: "Customers ask AI who to visit. Does it say you?",
    description: "An honest AI visibility check for local businesses.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${mono.variable} ${display.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
        <footer className="container footer">
          <p>{METHOD}</p>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
