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

  return <section className="hero" id="top">
    <div className="hero-slides" aria-label="Kanchenjunga Trails landscape slideshow">{slides.map((image, index) => <img key={image} className={`hero-slide${index === active ? " active" : ""}`} src={image} alt="Himalayan landscape" />)}</div>
    <div className="hero-overlay" />
    <div className="hero-copy"><p className="eyebrow">MEANINGFUL JOURNEYS</p><h1>More than travel — <em>it's a new perspective.</em></h1><p>Find your way from the tea gardens to the high Himalaya. Thoughtful journeys, local hosts and a warm welcome from the moment you arrive at NJP or Bagdogra.</p><a className="btn" href="#places">Explore a trip <span>↗</span></a></div>
    <div className="hero-feature"><img src={slides[active]} alt="Featured Himalayan journey" /><div><span>Featured journey</span><strong>Tea gardens &amp; high trails</strong><small>7 days · Darjeeling to Sikkim</small><b className="hero-price">From ₹14,999 / person</b></div><button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="Show next featured journey">↗</button></div>
    <svg className="hero-wave" viewBox="0 0 1000 190" preserveAspectRatio="none" aria-hidden="true"><path d="M0 55 C110 78 170 145 300 135 C420 126 460 62 600 45 C755 26 830 70 1000 28 L1000 190 L0 190 Z" /></svg>
    <div className="hero-dots" aria-label="Choose slideshow image">{slides.map((image, index) => <button key={image} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} />)}</div>
  </section>;
}
