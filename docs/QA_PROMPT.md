# End-to-end QA prompt for Claude in Chrome

Paste the prompt below into Claude in Chrome. It tests the live app as a non-technical business owner would, then compares Cited with existing AI visibility tools.

---

You are testing **Cited** (https://cited-dev.vercel.app), a web app that tells a local business owner whether AI assistants recommend them, shows why, checks whether AI agents can read their website, and drafts fixes they approve.

Act as a non-technical small business owner (for example, a sweet shop owner in Bhopal or a cafe owner in Portland). You do not know what "schema", "robots.txt" or "llms.txt" mean. Work in a new tab. Do not enter passwords, payment details or real customer data. Do not approve or publish drafts for a real business you do not own; use the saved examples for approval and publishing.

## Part 1: Test every flow

For each step, note what you expected, what happened, how long it took, and anything confusing. Take a screenshot when something looks wrong.

1. **Landing page.** Load the home page. Watch the load-in animation. Is it clear within 10 seconds what the product does and what to do first? Scroll through every section. Note anything hard to read or unclear.
2. **Saved example.** Under Examples, open "Brew Lane Cafe". Read the report top to bottom.
   - Do you understand the headline result ("AI mentioned you in X of Y")?
   - Do you understand "Who AI suggests instead"?
   - In "Can AI agents use your website?", use "Try it on any real website" with a real site (try a well-known brand and a small local business site). Do the results make sense to you? Are the fixes actionable for a non-technical owner?
   - Open "What AI said" on two questions and click a source link. Does it open?
3. **To-do list.** Click "Review and use" on step 1, "Publish a simple page about your business".
   - Does the editor load without flashing placeholder content?
   - Add the sentence "Open 24 hours." to the draft and click "Approve and publish". You should be blocked with an explanation. Is the explanation clear?
   - Remove that sentence and approve again. Read the "Your page is live" panel. Do you understand what the page is for and where to put the link?
   - Open the published page. Does it look like a trustworthy business page? Open its "AI summary" link.
4. **Other to-do items.** Open steps 2, 3 and 4 and approve each. Is it clear what to do with each one afterwards (Google profile text, review messages and QR card, website code)?
5. **Live quick check.** Return to the home page and run a Quick check on a real local business you can find online (any city). Do not use deep research.
   - Does "Is this your business?" show the right business? Is it convincing? Try "Something's wrong, let me fix it", then continue.
   - During the search, is it obvious where to look and what is happening?
   - When it finishes, open the full report. Does the AI agent check run on the business's website? If the business has no website, is the message clear?
6. **Mobile.** Resize the window to phone width (about 390px) and repeat steps 1 to 3 briefly. Note anything cut off, overlapping or too small.
7. **Errors and edge cases.** Try a business name that does not exist, an empty city, and closing the check window mid-search, then reopen the report via "Continue … report" on the home page.

## Part 2: Compare with existing AI visibility tools

Research tools such as Profound, Otterly.AI, Peec AI, Semrush AI Toolkit, HubSpot AI Search Grader and Vercel's Is Agentic. Look at their public product pages and pricing.

For each, note: who it is for, what it measures, price, and whether a non-technical local business owner could use it.

Then answer:

1. What does Cited do that these tools do not? Be specific (for example: evidence-linked answers, agent-readiness for small business sites, owner-approved fact-locked fixes, a hosted agent-ready page, plain language).
2. Where is Cited weaker?
3. List the 5 highest-impact improvements for the end user, ranked by impact and effort. For each: the problem, the proposed change, and why it matters to a small business owner.

## Report format

Return:

1. **Bugs**, ranked by severity, with steps to reproduce, expected vs actual, and screenshots.
2. **Confusing moments** for a non-technical owner, quoting the exact on-screen text.
3. **Competitor comparison table.**
4. **Top 5 improvements**, as described above.
5. **One-paragraph verdict:** would a busy shop owner finish the flow and find it worth it?
