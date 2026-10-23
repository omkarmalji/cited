import { Clock, Globe, MapPin, Storefront } from "@phosphor-icons/react";
import type { Facts, Source } from "@/lib/types";

// The "Is this your business?" card: what we found, and where we found it.
export function BusinessMatch({
  facts,
  sources,
}: {
  facts: Facts;
  sources: Source[];
}) {
  const domains = [...new Set(sources.map((s) => s.domain))].slice(0, 4);
  const website = facts.website.replace(/^https?:\/\/(www\.)?/, "");
  return (
    <div className="business-match">
      <div className="match-details">
        <strong className="match-name">{facts.name}</strong>
        <span className="match-kind">
          <Storefront size={14} aria-hidden="true" />
          {[facts.category, facts.city, facts.country]
            .filter(Boolean)
            .join(" · ")}
        </span>
        <ul>
          <li>
            <MapPin size={16} aria-hidden="true" />
            {facts.address || <em>No address found</em>}
          </li>
          <li>
            <Clock size={16} aria-hidden="true" />
            {facts.hours || <em>No opening hours found</em>}
          </li>
          <li>
            <Globe size={16} aria-hidden="true" />
            {website || <em>No website found</em>}
          </li>
        </ul>
        {domains.length > 0 && (
          <p className="match-found">
            Found on{" "}
            {domains.map((d, i) => (
              <span key={d}>
                {i > 0 && ", "}
                <a
                  href={sources.find((s) => s.domain === d)!.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {d}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
