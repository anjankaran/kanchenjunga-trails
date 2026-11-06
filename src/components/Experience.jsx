import mountainView from "../assets/pexels-artosuraj-33237705.jpg";
import monastery from "../assets/pexels-captain-10440693.jpg";
import hillside from "../assets/akanksha-singh-nJxWADYw93Y-unsplash.jpg";

const values = [
  { icon: "↗", label: "Slow travel" },
  { icon: "⌂", label: "Local stories" },
  { icon: "♡", label: "Small groups" },
  { icon: "✳", label: "Travel gently" },
];

export default function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience-collage reveal" aria-label="Scenes from North Bengal and the Himalaya">
        <img className="collage-mountain" src={mountainView} alt="A quiet Himalayan mountain landscape" loading="lazy" />
        <img className="collage-monastery" src={monastery} alt="A monastery nestled in the hills" loading="lazy" />
        <img className="collage-hillside" src={hillside} alt="Green hillside homes surrounded by forest" loading="lazy" />
        <span className="collage-caption">A little closer to the places you came to see.</span>
      </div>
      <div className="experience-copy reveal" style={{ "--delay": "100ms" }}>
        <p className="eyebrow">TRAVEL THAT FEELS LIKE HERE</p>
        <h2 id="experience-title">Meaningful journeys for people who care about <em>the places they visit.</em></h2>
        <p>Take the slower road through tea country, mountain towns and quiet forest edges. Meet the people who make this region special, leave room for the unexpected, and take only memories home.</p>
        <div className="experience-values" aria-label="What makes our journeys thoughtful">
          {values.map((value) => (
            <div className="experience-value" key={value.label}>
              <span aria-hidden="true">{value.icon}</span>
              <small>{value.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
