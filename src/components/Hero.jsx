import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  return <section className="hero" id="top"><div className="hero-slides" aria-label="Kanchenjunga Trails landscape slideshow">{slides.map((image, index) => <img key={image} className={`hero-slide${index === active ? " active" : ""}`} src={image} alt="Himalayan landscape" />)}</div><div className="hero-overlay" /><div className="hero-copy"><p className="eyebrow">THE GATEWAY</p><h1>Every trail begins at <em>NJP &amp; Siliguri</em></h1><p>Land at Bagdogra or roll into NJP — our driver is waiting at the platform before you step off the train. Thoughtful journeys into North Bengal, from tea gardens to the high Himalaya.</p><a className="btn" href="#places">Explore the circuit <span>↗</span></a></div><div className="hero-dots" aria-label="Choose slideshow image">{slides.map((image, index) => <button key={image} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} />)}</div></section>;
}
