"use client";
import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { Wordmark } from "./ui";
const left = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#examples", label: "Examples" },
];
const right = [
  { href: "/#honesty", label: "Principles" },
  { href: "/#pricing", label: "Pricing" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="nav-bar">
        <span className="nav-tag">cited.check</span>
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          {[...left, ...right].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className={i >= left.length ? "nav-right" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Wordmark />
        <Link className="button strong nav-cta" href="/#check" onClick={close}>
          Run free check
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>
    </header>
  );
}
