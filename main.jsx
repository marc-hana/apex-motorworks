import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Wrench, Gauge,
  ShieldCheck, Sparkles, Clock3, MapPin, Phone, Instagram, Facebook,
  CheckCircle2, ChevronDown
} from "lucide-react";
import "./styles.css";

const services = [
  { n: "01", icon: Wrench, title: "Mechanical care", desc: "From routine maintenance to complex repairs, we keep every component working as it should.", tags: ["Engine service", "Brake systems", "Suspension"] },
  { n: "02", icon: Gauge, title: "Diagnostics", desc: "Clear answers, accurate testing and practical solutions — without the guesswork.", tags: ["Computer scan", "Electrical checks", "Performance"] },
  { n: "03", icon: Sparkles, title: "Detailing & finish", desc: "Bring back the depth, clarity and character of your vehicle with careful finishing.", tags: ["Paint correction", "Interior care", "Ceramic finish"] }
];

const packages = [
  { name: "Essential", price: "₱1,499", detail: "A practical refresh for everyday driving.", items: ["Exterior hand wash", "Interior vacuum", "Dashboard wipe-down", "Tire dressing"] },
  { name: "Signature", price: "₱3,499", detail: "A deeper clean with extra attention to detail.", items: ["Everything in Essential", "Deep interior cleaning", "Paint decontamination", "Premium wax finish"], featured: true },
  { name: "Ultimate", price: "₱6,999", detail: "A complete presentation-focused treatment.", items: ["Everything in Signature", "One-step paint enhancement", "Engine bay cleaning", "Glass treatment"] }
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", vehicle: "", service: "Mechanical care", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <div className="announcement"><span className="pulse" /> NOW ACCEPTING SERVICE APPOINTMENTS <span className="announce-right">MON–SAT / 8:00 AM–6:00 PM</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Apex Motorworks home">
          <span className="brand-mark">A<span>/</span></span>
          <span className="brand-copy">APEX<span>MOTORWORKS</span></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
        <nav className={mobileOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#booking" onClick={closeMenu}>Book a service <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span /> AUTOMOTIVE CARE, REDEFINED</p>
            <h1>Driven by<br /><em>precision.</em></h1>
            <p className="hero-lede">Thoughtful automotive care for people who care about every detail. Performance, protection and craftsmanship — all under one roof.</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#booking">Book an appointment <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#services">Explore services <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-foot">
            <span>BUILT AROUND YOUR DRIVE</span>
            <span className="hero-index">01 <i /> 04</span>
          </div>
          <div className="hero-vertical">APEX MOTORWORKS / EST. 2024</div>
        </section>

        <section className="intro section-pad">
          <div className="intro-label"><span className="orange-line" /> THE APEX STANDARD</div>
          <div className="intro-copy">
            <h2>Good work isn't loud.<br /><span>It's felt every time you drive.</span></h2>
            <p>We believe automotive care should be straightforward, considered and built to last. Our team combines hands-on experience with the right tools to give your vehicle the attention it deserves.</p>
            <a className="under-link" href="#about">Get to know us <ArrowUpRight size={16} /></a>
          </div>
          <div className="intro-stat"><strong>01<span>/</span></strong><small>ONE STANDARD.<br />NO SHORTCUTS.</small></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div><p className="eyebrow dark-eyebrow">WHAT WE DO</p><h2>Care for every<br /><em>kilometer.</em></h2></div>
            <p className="heading-note">From essential maintenance to the finishing touches, every service starts with understanding what your vehicle needs.</p>
          </div>
          <div className="service-grid">
            {services.map(({ n, icon: Icon, title, desc, tags }) => (
              <article className="service-card" key={n}>
                <div className="service-top"><span>{n} / 03</span><Icon size={25} strokeWidth={1.5} /></div>
                <h3>{title}</h3><p>{desc}</p>
                <div className="tag-list">{tags.map(t => <span key={t}>{t}</span>)}</div>
                <a href="#booking" className="circle-arrow" aria-label={`Book ${title}`}><ArrowUpRight size={19} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="feature" id="about">
          <div className="feature-photo" />
          <div className="feature-copy">
            <p className="eyebrow"><span /> OUR APPROACH</p>
            <h2>Respect the<br />machine. <em>Respect</em><br />the driver.</h2>
            <p>We take the time to inspect, explain and recommend. You get honest guidance, careful workmanship and a team that treats your vehicle like it matters — because it does.</p>
            <div className="feature-points">
              <div><ShieldCheck /><span><b>Clear recommendations</b><small>We explain what matters and why.</small></span></div>
              <div><Wrench /><span><b>Careful workmanship</b><small>Details checked. Work done properly.</small></span></div>
              <div><Clock3 /><span><b>Respect for your time</b><small>Appointments and updates you can count on.</small></span></div>
            </div>
            <a className="button button-outline" href="#contact">Talk to our team <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="packages section-pad" id="packages">
          <div className="section-heading">
            <div><p className="eyebrow dark-eyebrow">STRAIGHTFORWARD OPTIONS</p><h2>Choose your<br /><em>level of care.</em></h2></div>
            <p className="heading-note">A starting point for your vehicle's needs. Final pricing may vary depending on vehicle size and condition.</p>
          </div>
          <div className="package-grid">
            {packages.map((p) => <article className={`package-card ${p.featured ? "package-featured" : ""}`} key={p.name}>
              {p.featured && <span className="popular">MOST POPULAR</span>}
              <p className="package-kicker">APEX / DETAILING</p><h3>{p.name}</h3><p className="package-detail">{p.detail}</p>
              <div className="price">{p.price}<small> / starting at</small></div>
              <ul>{p.items.map(i => <li key={i}><CheckCircle2 size={15} />{i}</li>)}</ul>
              <a href="#booking" className={p.featured ? "button button-orange full-button" : "button button-dark full-button"}>Select package <ArrowUpRight size={16} /></a>
            </article>)}
          </div>
        </section>

        <section className="quote-band">
          <div className="quote-mark">“</div>
          <blockquote>It's not just about getting there.<br /><em>It's how you get there.</em></blockquote>
          <span>THE APEX MINDSET</span>
        </section>

        <section className="faq section-pad">
          <div><p className="eyebrow dark-eyebrow">GOOD TO KNOW</p><h2>Questions,<br /><em>answered.</em></h2></div>
          <div className="faq-list">
            {[
              ["Do I need an appointment?", "We recommend booking ahead so we can prepare for your vehicle. Walk-ins may be accommodated depending on the day's schedule."],
              ["Can I ask for a service estimate first?", "Absolutely. Send us your vehicle details and the service you're considering. We'll help you understand the likely scope and next steps."],
              ["Do prices vary by vehicle?", "Yes. Vehicle size, condition and the work required can affect the final price. Any changes should be discussed with you before work begins."]
            ].map(([q, a], i) => <div className="faq-item" key={q}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><ChevronDown className={faqOpen === i ? "rotated" : ""} /></button>
              {faqOpen === i && <p>{a}</p>}
            </div>)}
          </div>
        </section>

        <section className="booking section-pad" id="booking">
          <div className="booking-copy">
            <p className="eyebrow"><span /> LET'S GET YOU MOVING</p>
            <h2>Your next drive<br />starts <em>here.</em></h2>
            <p>Tell us a little about your vehicle and what you need. We'll get back to you to confirm the details.</p>
            <div className="booking-contact"><span><Phone size={16} /> +63 917 000 0000</span><span><MapPin size={16} /> Quezon City, Philippines</span></div>
          </div>
          <form className="booking-form" onSubmit={submit}>
            {submitted ? <div className="success-state"><CheckCircle2 size={38} /><h3>Request received.</h3><p>Thanks, {form.name}. This demo form is ready to be connected to your email or booking backend.</p><button type="button" className="button button-orange" onClick={() => {setSubmitted(false); setForm({name:"",email:"",vehicle:"",service:"Mechanical care",date:"",notes:""});}}>Send another request</button></div> : <>
              <div className="form-title"><span>01 — APPOINTMENT REQUEST</span><span>EST. 2 MIN</span></div>
              <div className="field-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Full name" required /></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label></div>
              <label>Vehicle details<input name="vehicle" value={form.vehicle} onChange={update} placeholder="e.g. 2021 Toyota Corolla" required /></label>
              <div className="field-row"><label>Service needed<select name="service" value={form.service} onChange={update}><option>Mechanical care</option><option>Diagnostics</option><option>Detailing & finish</option><option>Not sure yet</option></select></label><label>Preferred date<input name="date" type="date" value={form.date} onChange={update} /></label></div>
              <label>Anything we should know? <textarea name="notes" value={form.notes} onChange={update} placeholder="Tell us about the concern or service..." rows="3" /></label>
              <button className="button button-orange submit-button" type="submit">Send appointment request <ArrowUpRight size={17} /></button>
              <small className="form-disclaimer">DEMO INTERFACE — CONNECT A FORM SERVICE OR BACKEND BEFORE ACCEPTING REAL BOOKINGS.</small>
            </>}
          </form>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>/</span></span><span className="brand-copy">APEX<span>MOTORWORKS</span></span></a>
          <p>Precision in every detail.<br />Confidence in every drive.</p>
          <div className="footer-links"><span>EXPLORE</span><a href="#services">Services</a><a href="#about">Our approach</a><a href="#packages">Packages</a></div>
          <div className="footer-links"><span>GET IN TOUCH</span><a href="tel:+639170000000">+63 917 000 0000</a><a href="mailto:hello@apexmotorworks.ph">hello@apexmotorworks.ph</a><a href="#booking">Book an appointment</a></div>
          <div className="footer-social"><a href="#contact" aria-label="Instagram"><Instagram /></a><a href="#contact" aria-label="Facebook"><Facebook /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 APEX MOTORWORKS. ALL RIGHTS RESERVED.</span><span>DESIGNED WITH INTENTION <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
