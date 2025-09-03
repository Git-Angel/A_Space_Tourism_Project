import { useState } from "react";
import { crew } from "../data";
import type { CrewMember } from "../types";

export default function Crew() {
  const [idx, setIdx] = useState(0);
  const c: CrewMember = crew[idx];

  return (
    <section className="crew">
      <h2 className="section-title">
        <span>02</span> Meet your crew
      </h2>

      <div className="crew__grid">
        <div className="crew__content">
          <p className="role">{c.role}</p>
          <h3 className="title">{c.name}</h3>
          <p className="body">{c.bio}</p>

          <div className="dots" role="tablist" aria-label="Crew member">
            {crew.map((m, i) => (
              <button
                key={m.id}
                aria-label={`Show ${m.name}`}
                aria-selected={i === idx}
                role="tab"
                className={`dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>

        <div className="crew__visual">
          {c.image ? (
            <img
              src={c.image}
              alt={c.name}
              style={{ width: "100%", maxWidth: 360, height: "auto" }}
            />
          ) : (
            <div className="astronaut" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
