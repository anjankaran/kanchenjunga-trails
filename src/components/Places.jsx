import { useState } from "react";
import { places } from "../data/places.js";

export default function Places() {
  const [activeId, setActiveId] = useState(places[0].id);
  const active = places.find((p) => p.id === activeId);

  return (
    <section className="section destinations" id="places">
      <div className="section-heading"><div><p className="eyebrow">THE CIRCUIT</p><h2>Six worlds, one winding road</h2></div><div className="filters"><button className="active">All</button><button>Hill Stations</button><button>Wildlife</button></div></div>
      <div className="places">
        <ul className="place-tabs" role="tablist" aria-label="Destinations">
          {places.map((p) => (
            <li key={p.id}>
              <button role="tab" aria-selected={p.id === activeId}
                className={p.id === activeId ? "tab on" : "tab"}
                onClick={() => setActiveId(p.id)}>{p.name}</button>
            </li>
          ))}
        </ul>
        <article className={`place-detail place-${active.id} reveal`} role="tabpanel">
          <div className="place-meta"><span>{active.altitude}</span><span>{active.season}</span></div>
          <div className="place-shade" />
          <div className="place-copy">
            <p className="eyebrow">{active.id === "darjeeling" ? "THE QUEEN OF THE HILLS" : "WHERE THE FORESTS BREATHE"}</p>
          <h3>{active.name}</h3>
          <p>{active.text}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
