import { useEffect, useState } from "react";
import logo from "../assets/logo1.png";

const links = [["Destinations", "#places"], ["NJP Hub", "#hub"], ["Packages", "#tours"], ["Enquiry", "#enquire"]];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return <header className={`header${scrolled ? " scrolled" : ""}`}><a className="brand" href="#top"><img className="brand-logo" src={logo} alt="Kanchenjunga Trails logo" /><span>Kanchenjunga Trails<small>SILIGURI · NJP</small></span></a><nav aria-label="Main">{links.map(([label, href]) => <a className={active === href ? "selected" : ""} key={href} href={href} onClick={() => setActive(href)}>{label}</a>)}</nav><a className="phone" href="tel:+919800012345">☎ &nbsp;+91 98000 12345</a></header>;
}
