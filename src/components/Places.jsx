import { useState } from "react";
import { places } from "../data/places.js";

export default function Places() {
  const [activeId, setActiveId] = useState(places[0].id);
  const active = places.find((p) => p.id === activeId);
  const images = {
    darjeeling: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85",
    kalimpong: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    kurseong: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=85",
    mirik: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    dooars: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=900&q=85",
    gangtok: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=85",
  };

  return (
    <section className="section destinations" id="places">
      <div className="section-heading"><div><p className="eyebrow">THE CIRCUIT</p><h2>Six worlds, one winding road</h2></div></div>
      <div className="place-grid" aria-label="Destinations">
        {places.map((place, index) => (
          <button
            className={`place-card reveal${place.id === activeId ? " selected" : ""}`}
            key={place.id}
            type="button"
            style={{ "--delay": `${index * 90}ms` }}
            aria-pressed={place.id === activeId}
            onClick={() => setActiveId(place.id)}
          >
            <img className="place-card-image" src={images[place.id]} alt="" loading="lazy" />
            <span className="place-card-meta">{place.altitude}</span>
            <span className="place-card-copy"><span className="place-card-name">{place.name}</span><span>{place.season}</span></span>
          </button>
        ))}
      </div>
      <article className="selected-place" aria-live="polite">
        <div><p className="eyebrow">A LITTLE MORE ABOUT {active.name.toUpperCase()}</p><h3>{active.name}, at your own pace</h3><p>{active.text}</p></div>
        <a className="btn" href="#tours">Explore journeys <span>↗</span></a>
      </article>
    </section>
  );
}
