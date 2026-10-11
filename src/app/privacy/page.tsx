export default function Page() {
  return (
    <main id="main" className="app-container legal-copy">
      <h1>Privacy.</h1>
      <p>
        Cited is a hackathon prototype. It stores business details, confirmed
        facts, source excerpts, model answers, drafted fixes, and approvals to
        produce your report.
      </p>
      <p>
        Live checks send the business name, city, confirmed facts, and public
        source content to Nebius Token Factory and Tavily. Optional email login
        uses Supabase Auth. API keys stay on the server.
      </p>
      <p>
        An essential session cookie lets this browser access its reports.
        Free-check limits use a daily hash of your IP address. No advertising
        cookies are used.
      </p>
      <p>
        Approving a hosted page makes its approved business information public.
        Do not add private or sensitive information to the fact confirmation
        screen. Avoid patient or customer data.
      </p>
      <p>
        Local development stores reports in .data. Deployed storage uses the
        configured Supabase project. This prototype currently has no
        self-service deletion screen; the project operator can remove stored
        reports from that storage.
      </p>
    </main>
  );
}
