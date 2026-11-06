export default function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand"><strong>Kanchenjunga Trails</strong><p>Made for the long way around.</p></div>
      <nav className="footer-links" aria-label="Footer"><a href="#places">Destinations</a><a href="#hub">NJP Hub</a><a href="#tours">Packages</a><a href="#enquire">Enquiry</a></nav>
      <div className="footer-contact"><span>Plan your next escape</span><a href="tel:+919800012345">+91 98000 12345</a><a href="mailto:hello@kanchenjungatrails.com">hello@kanchenjungatrails.com</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 · Siliguri, West Bengal</span><span className="image-sources">Images: <a href="https://unsplash.com/photos/a-view-of-a-mountain-range-in-the-distance-qhQg07YHjvU" target="_blank" rel="noreferrer">Kanchenjunga</a> · <a href="https://unsplash.com/photos/a-lush-green-tea-field-under-a-blue-sky-OcYfD2ccy-U" target="_blank" rel="noreferrer">Darjeeling tea garden</a> · <a href="https://unsplash.com/photos/green-misty-mountains-with-a-small-village-nuWdbq4q0-M" target="_blank" rel="noreferrer">Gangtok, Sikkim</a></span></div>
  </footer>;
}
