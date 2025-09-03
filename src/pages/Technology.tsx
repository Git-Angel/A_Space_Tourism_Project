import { useState } from "react";
import { technologies } from "../data";
import type { Technology } from "../types";

export default function Technology() {
  const [idx, setIdx] = useState(0);
  const t: Technology = technologies[idx];

  return (
    <section className="tech">
      <h2 className="section-title">
        <span>03</span> Space launch 101
      </h2>

      <div className="tech__grid">
        <div className="numtabs" role="tablist" aria-label="Technology">
          {technologies.map((x, i) => (
            <button
              key={x.id}
              className={`numtab ${i === idx ? "active" : ""}`}
              role="tab"
              aria-selected={i === idx}
              onClick={() => setIdx(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="tech__content">
          <p className="eyebrow">The terminology…</p>
          <h3 className="title">{t.name}</h3>
          <p className="body">{t.description}</p>
        </div>

        <div className="tech__visual">
          {t.imagePortrait || t.imageLandscape ? (
            <picture>
              {t.imagePortrait && (
                <source media="(min-width:1000px)" srcSet={t.imagePortrait} />
              )}
              <img
                src={t.imageLandscape ?? t.imagePortrait}
                alt={t.name}
                style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
              />
            </picture>
          ) : (
            <div className="techbox" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
