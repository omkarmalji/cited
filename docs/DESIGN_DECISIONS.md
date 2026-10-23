# Design refinements

The original design.md remains the initial reference. Owner feedback has since replaced its violet visual direction with a black, editorial look modelled on an owner-supplied landing page reference.

- Canvas and type: pure black canvas. Space Grotesk throughout, with thin uppercase two-tone display headings (white, then a grey gradient word). JetBrains Mono stays for counts, citations and receipts.
- Accent: copper. The landing page background is ThreeUI Flow Field, fine copper threads drifting behind every section. It is bundled from its registered source file (alongside the original `PredictiveArcCanvas` export) and configured only through props, so all sixteen registered files keep their hashes. It is a fixed, dimmed layer with a darker centre so text stays legible; the frame is inert and hidden from assistive technology, and reduced-motion mode omits it.
- Page grid: borrowed from cal.com. Hairline rails run down the container edges, full-bleed rules separate sections with crosshair markers, key blocks get double-rail frames, and quote and pricing cards sit in padded cells divided by hairlines. Content is inset inside the rails.
- Landing structure: floating pill nav, hero with honest method stat cards, an inline-chip manifesto, a sticky "How it works" index beside scrolling steps, a colour-tile mosaic of the saved examples, honesty principles in quote cards, pricing, a large CTA, and an underline-input check form.
- Honesty: no fabricated usage numbers, testimonials or "most popular" labels. Stat cards state the method (8 questions, 40 answers, 0 uncited claims). The footer carries the required method disclaimer. Example tiles show their real saved scores and a Sample data badge.
- App screens share the tokens. The report leads with a 40-dot run matrix, an outlook breakdown and a "Start here" pointer, sorts questions most-winnable first, and adds section links. The fix editor shows a fact-lock sidebar beside the draft.

The functional evidence, confirmation and approval flows are unchanged: five runs per question, fetched citation links, explicit fact confirmation, rejected unsupported edits and owner approval before publishing.
