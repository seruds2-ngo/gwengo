import { Link } from "@tanstack/react-router";
import { useState, type ComponentProps } from "react";
import { ChevronDown, Heart, Mail, MapPin, Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gwen-india-logo.webp.asset.json";
import qr from "@/assets/gwen-donation-qr.webp.asset.json";

const base = "https://gwengoindia.org";
const nav = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us/", children: [ ["Mission", "mission"], ["Vision", "vision"], ["Objectives", "objectives"], ["Charitable Status", "charitable-status"], ["Financials", "financials"], ["Donor Speak", "donor-speak"], ["Our Work", "our-work"] ] },
  { label: "Elders", path: "/elders/", children: [["Nutritious meal", "nutritious-meal"], ["Groceries support", "groceries-support"], ["Nutritious Diet", "nutritious-diet"], ["Distribution of Blankets", "distribution-of-blankets"]] },
  { label: "Children", path: "/children/", children: [["Education Material", "education-material"], ["Sponsorship", "sponsorship"], ["School Uniforms", "school-uniforms"], ["Day Care", "day-care"]] },
  { label: "Women", path: "/women/", children: [["Women Empowerment", "women-empowerment"], ["Health Education", "health-education"]] },
  { label: "Media", path: "/media/" },
  { label: "Contact us", path: "/contact-us/" },
];

function SiteLink({ href, ...props }: Pick<ComponentProps<"a">, "href" | "children" | "className" | "aria-label" | "ref">) {
  if (href === "/" || href === `${base}/`) return <Link to="/" {...props} />;
  if (href === `${base}/about-us/`) return <Link to="/about-us" {...props} />;
  if (href === `${base}/about-us/mission/`) return <Link to="/about-us/mission" {...props} />;
  if (href === `${base}/elders/`) return <Link to="/elders" {...props} />;
  if (href === `${base}/children/`) return <Link to="/children" {...props} />;
  if (href === `${base}/women/`) return <Link to="/women" {...props} />;
  if (href === `${base}/women/women-empowerment/`) return <Link to="/women/women-empowerment" {...props} />;
  if (href === "/#donate") return <Link to="/" hash="donate" {...props} />;
  return <a href={href} {...props} />;
}

export function SiteHeader({ activePage }: { activePage: "Home" | "About Us" | "Elders" | "Children" | "Women" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
      <div className="topbar"><div className="container topbar-inner"><SiteLink href="mailto:mail2gwe@gmail.com"><Mail size={12} /> mail2gwe@gmail.com</SiteLink><div className="topbar-right"><span className="topbar-location">Kurnool, Andhra Pradesh, India</span><span>Empowering lives since 1998</span><SiteLink href={`${base}/about-us/charitable-status/`}><ShieldCheck size={12} /> Registered NGO</SiteLink></div></div></div>
      <header className="header"><div className="container header-inner">
        <SiteLink className="brand" href="/" aria-label="GWE NGO India home"><img src={logo.url} alt="GWE NGO INDIA" width="405" height="80" /></SiteLink>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <div className="nav-item" key={item.label}><SiteLink className={`nav-link ${item.label === activePage ? "active" : ""}`} href={`${base}${item.path}`}>{item.label}{item.children && <ChevronDown size={12} />}</SiteLink>{item.children && <div className="dropdown">{item.children.map(([label,slug]) => <SiteLink key={slug} href={`${base}${item.path}${slug}/`}>{label}</SiteLink>)}</div>}</div>)}</nav>
        <div className="header-controls"><Button asChild className="donate-button"><SiteLink href="/#donate"><Heart size={15} /> Donate Now</SiteLink></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>{menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{nav.map(item => item.children ? <details key={item.label}><summary>{item.label}</summary><div className="mobile-submenu"><SiteLink href={`${base}${item.path}`}>{item.label}</SiteLink>{item.children.map(([label,slug]) => <SiteLink key={slug} href={`${base}${item.path}${slug}/`}>{label}</SiteLink>)}</div></details> : <SiteLink key={item.label} href={`${base}${item.path}`}>{item.label}</SiteLink>)}</nav>}</header>
  </>;
}

export function SiteFooter() {
  return (
      <footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-about"><SiteLink href="/"><img className="footer-logo" src={logo.url} alt="GWE NGO INDIA" width="405" height="80" loading="lazy" /></SiteLink><address><MapPin size={16} className="mb-2" />D.No.48-53, Budhawarapeta,<br />Near Chenna Keshavaswamy Temple,<br />Kurnool-518002, Andhra Pradesh, INDIA.</address><SiteLink className="footer-link mt-4" href="mailto:mail2gwe@gmail.com">mail2gwe@gmail.com</SiteLink></div><div><h3>About Us</h3>{nav.filter(n => ["Home","About Us","Elders","Women","Contact us"].includes(n.label)).map(n => <SiteLink className="footer-link" key={n.label} href={`${base}${n.path}`}>{n.label}</SiteLink>)}</div><div><h3>Support Us</h3>{nav.find(n => n.label === "Children")?.children?.map(([label, slug]) => <SiteLink className="footer-link" key={slug} href={`${base}/children/${slug}/`}>{label}</SiteLink>)}<SiteLink className="footer-link" href={`${base}/media/`}>Media</SiteLink></div><div className="footer-contact"><h3>Donate to GWE NGO India</h3><img className="footer-qr" src={qr.url} alt="GWE NGO India donation payment QR code — pay using any UPI app" width="533" height="717" loading="lazy" /></div></div><div className="footer-bottom"><span>© 2026 GWE NGO India. All Rights Reserved. <span className="footer-registration">NITI AAYOG Unique Id: AP/2013/0068072</span></span><div className="footer-policies">{[["Privacy Policy","privacy-policy"],["Refund & Cancellation Policy","refund-cancellation-policy"],["Terms & Conditions","terms-conditions"],["Disclaimer","disclaimer"],["Sitemap","sitemap"]].map(([label,slug]) => <SiteLink key={slug} href={`${base}/${slug}/`}>{label}</SiteLink>)}</div></div></div></footer>  );
}
