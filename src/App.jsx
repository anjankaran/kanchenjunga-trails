import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Places from "./components/Places.jsx";
import Tours from "./components/Tours.jsx";
import Enquiry from "./components/Enquiry.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [tour, setTour] = useState("");
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -50px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="site-frame">
      <Header />
      <main>
        <Hero />
        <div className="estate-strip" aria-label="Tea estates"><div className="estate-track"><div className="estate-group"><span>Margaret's Hope Tea Estate</span><i>◆</i><span>Tumsong Tea Estate</span><i>◆</i><span>Glenburn Tea Estate</span><i>◆</i><span>Ambootia Tea Estate</span><i>◆</i><span>Makaibari Tea Estate</span><i>◆</i></div><div className="estate-group" aria-hidden="true"><span>Margaret's Hope Tea Estate</span><i>◆</i><span>Tumsong Tea Estate</span><i>◆</i><span>Glenburn Tea Estate</span><i>◆</i><span>Ambootia Tea Estate</span><i>◆</i><span>Makaibari Tea Estate</span><i>◆</i></div></div></div>
        <Experience />
        <Places />
        <section className="gateway reveal" id="hub">
          <div><p className="eyebrow">THE GATEWAY</p><h2>Every trail begins at <em>NJP &amp; Siliguri</em></h2><p>Land at Bagdogra or roll into NJP — our driver is waiting at the platform before you step off the train. Thoughtful journeys into North Bengal, from tea gardens to the high Himalaya.</p><a className="btn" href="#places">Explore the circuit <span>↗</span></a></div>
          <div className="route-line"><span><b>01</b>NJP Railway Station<small>Gateway to the hills</small></span><span><b>02</b>Siliguri Junction<small>Our fleet hub</small></span><span><b>03</b>Coronation Bridge<small>Across the Teesta</small></span><span><b>04</b>The Hills<small>Choose your ridge</small></span></div>
        </section>
        <Tours onChoose={setTour} />
        <Enquiry tour={tour} setTour={setTour} />
      </main>
      <Footer />
    </div>
  );
}
