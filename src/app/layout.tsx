import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../generated/threeui.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
export const metadata: Metadata = {
  icons: { icon: "/brand/cited-icon.png", apple: "/brand/cited-icon.png" },
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
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
