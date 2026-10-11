import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "./ui";
import { METHOD } from "@/lib/types";

export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Wordmark />
          <p>Be found. Know why. Make your next move.</p>
        </div>
        <nav aria-label="Product">
          <h3>Product</h3>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#fix-pack">Fix pack</Link>
          <Link href="/#examples">Examples</Link>
          <Link href="/#pricing">Pricing</Link>
        </nav>
        <nav aria-label="Company">
          <h3>Company</h3>
          <Link href="/#honesty">Principles</Link>
          <a
            href="https://github.com/omkarmalji/cited"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/omkarmalji/cited/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact <ArrowUpRight size={13} />
          </a>
        </nav>
        <nav aria-label="Legal">
          <h3>Legal</h3>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="mono">{METHOD}</p>
        <p>© {new Date().getFullYear()} Cited. MIT licensed.</p>
      </div>
    </footer>
  );
}
