import Link from "next/link";
import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "./ui";
import { METHOD } from "@/lib/types";

export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-main">
        <Wordmark />
        <nav aria-label="Footer">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#examples">Examples</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>{METHOD}</p>
        <div>
          <a
            href="https://github.com/omkarmalji/cited"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={14} aria-hidden="true" /> Source
          </a>
          <a
            href="https://github.com/omkarmalji/cited/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={14} aria-hidden="true" /> Contact
          </a>
          <span>© {new Date().getFullYear()} Cited · MIT</span>
        </div>
      </div>
    </footer>
  );
}
