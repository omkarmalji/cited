"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { Wordmark } from "./ui";
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Wordmark />
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          <Link href="/#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </Link>
          <Link href="/#fix-pack" onClick={() => setOpen(false)}>
            The fix pack
          </Link>
          <Link href="/#examples" onClick={() => setOpen(false)}>
            Try an example
          </Link>
        </nav>
        <Link
          className="button strong nav-cta"
          href="/#check"
          onClick={() => setOpen(false)}
        >
          Run free check <ArrowRight size={16} />
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
    </header>
  );
}
