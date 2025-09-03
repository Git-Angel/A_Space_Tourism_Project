import { useState } from "react";
import { destinations } from "../data";


export default function Destination() {
  const [active, setActive] = useState(0);
  const d = destinations[active];

  return (
    <section className="dest">
      <h2 className="section-title">
        <span>01</span> Pick your destination
      </h2>

      <div className="dest__grid">
        <div className="dest__visual">
           <img src={d.image} alt={d.name} /> 
          <div className="planet" aria-hidden="true" />
        </div>

        <div className="dest__content">
          <div className="tabs">
            {destinations.map((x, i) => (
              <button
                key={x.id}
                className={`tab ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {x.name}
              </button>
            ))}
          </div>

          <h3 className="title">{d.name}</h3>
          <p className="body">{d.description}</p>

          <div className="metrics">
            <div>
              <p className="label">Avg. Distance</p>
              <p className="value">{d.distance}</p>
            </div>

            <div>
              <p className="label">Est. Travel Time</p>
              <p className="value">{d.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
