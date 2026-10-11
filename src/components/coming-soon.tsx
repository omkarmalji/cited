"use client";
import { useRef } from "react";
import { ArrowRight, X } from "@phosphor-icons/react";

export function ComingSoon({ plan }: { plan: "Owner" | "Agency" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className="button"
        type="button"
        aria-label={`Learn more about the ${plan} plan`}
        onClick={() => dialog.current?.showModal()}
      >
        Learn more <ArrowRight size={16} />
      </button>
      <dialog
        className="coming-soon-dialog"
        ref={dialog}
        aria-labelledby={`coming-soon-${plan}`}
      >
        <button
          className="dialog-close"
          type="button"
          aria-label="Close"
          onClick={() => dialog.current?.close()}
        >
          <X size={20} />
        </button>
        <p className="eyebrow">Coming soon</p>
        <h3 id={`coming-soon-${plan}`}>{plan} is on its way.</h3>
        <p>
          Paid plans and their waitlist are not open yet. You can run a free
          check today, with no signup or payment.
        </p>
        <a
          href="#check"
          className="button strong"
          onClick={() => dialog.current?.close()}
        >
          Run free check <ArrowRight size={16} />
        </a>
      </dialog>
    </>
  );
}
