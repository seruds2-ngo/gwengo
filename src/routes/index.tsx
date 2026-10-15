import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Heart, Mail, MapPin, Menu, X, ShieldCheck, Users, HandHeart, GraduationCap, Sprout, Target, HeartHandshake, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import qr from "@/assets/gwen-donation-qr.webp.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import children from "@/assets/hero_kids.jpg.asset.json";
import women from "@/assets/program_woman.jpg.asset.json";
import elders from "@/assets/program_elders.jpg.asset.json";
import about from "@/assets/about-women-hands.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "GWE NGO India — Your Support, Their Brighter Tomorrow" },
    { name: "description", content: "Glorious Women Empowerment supports women, children and elders in Kurnool, India. Founded by seven women in 1998. Support our work with a UPI donation." },
    { property: "og:title", content: "GWE NGO India — Glorious Women Empowerment" },
    { property: "og:description", content: "Since 1998, creating opportunities for women, supporting children and caring for elders. Your support and love make a difference." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const base = "https://gwengoindia.org";
const programs = [
  { title: "Support for Women", category: "EMPOWERMENT", image: women.url, path: "/women/", text: "We need your support in creating awareness & implementation of Medical Health, Adult education, primary education and vocational skills for Women." },
  { title: "Support for Elders", category: "CARE & DIGNITY", image: elders.url, path: "/elders/", text: "We need your support in providing welfare of senior citizens and elderly people with regards to Medical Health, Old Age homes and personal hygiene." },
  { title: "Support for Girl Child", category: "EDUCATION & HOPE", image: children.url, path: "/children/", text: "We need your support in organizing and conducting sensitization camps on sanitation, personal hygiene, health, education…." },
];
const values = [
  { title: "Empowerment", icon: Sprout, text: "Providing opportunities to women to acquire education and skills and to overcome the obstacles they face in their family and community." },
  { title: "Focus", icon: Target, text: "We focus mainly on women and children but do activities to other vulnerable, deprived sections and poor who are in need of support." },
  { title: "Dedication", icon: HeartHandshake, text: "We have service minded EC Members, dedicated staff and committed volunteers to take up upliftment activities for the needy." },
  { title: "Approach", icon: HandHeart, text: "We address educational, environmental and economic welfare of the women, children and other vulnerable sections of the society." },
];

function Index() {
  return (
    <div>
      <SiteHeader activePage="Home" />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={hero.url} alt="GWE educational material support for students in Kurnool" fetchPriority="high" />
          <div className="container hero-inner"><div className="hero-copy"><div className="eyebrow hero-label">Glorious Women Empowerment · Since 1998</div><h1 id="hero-title">There's nothing<br />more valuable than<br />your <em>support & love.</em></h1><p>In the year 1998, we, seven women, having passion in social service formed an organization by name “Glorious Women Empowerment”.</p><div className="hero-actions"><Button asChild className="donate-button"><a href="#donate">Make a Difference <Heart size={16} /></a></Button><Button asChild variant="outline" className="hero-secondary"><a href="#programs">Our Programs <ArrowRight size={16} /></a></Button></div><div className="hero-footnote"><ShieldCheck size={15} /> Supporting women, children & elders in need</div></div>
          <div className="qr-panel" id="donate"><div className="qr-heading"><Heart size={25} /><div><h2>A little kindness. A better life.</h2><p>Your support makes a difference.</p></div></div><div className="qr-body"><p>Support GWE NGO India</p><img className="qr-image" src={qr.url} alt="GWE NGO India donation payment QR code — pay using any UPI app" width="533" height="717" /><div className="qr-beneficiary">GLORIOUS WOMEN EMPOWERMENT</div><div className="qr-note"><ShieldCheck size={12} /> Direct support. Lasting impact.</div></div></div>
          </div>
        </section>
        <section className="impact-strip" aria-label="Our purpose"><div className="container impact-grid">{[{icon: HeartHandshake, title: "Since 1998",text: "A commitment to our community"},{icon: Users,title: "By women",text: "For a more equal tomorrow"},{icon: GraduationCap,title: "For children",text: "Education, care & opportunity"},{icon: HandHeart,title: "For elders",text: "Dignity, comfort & support"}].map(item => <div className="impact-item" key={item.title}><item.icon /><div><strong>{item.title}</strong><span>{item.text}</span></div></div>)}</div></section>
        <section className="section container" id="programs"><div className="section-header"><div><div className="eyebrow section-kicker">What makes us different?</div><h2 className="section-title">Your kindness. Their brighter tomorrow.</h2></div></div><div className="program-grid">{programs.map(p => <article className="program-card" key={p.title}><div className="program-photo"><img src={p.image} alt={p.title} loading="lazy" /><span className="program-category">{p.category}</span></div><div className="program-body"><h3>{p.title}</h3><p>{p.text}</p><a className="text-link" href={`${base}${p.path}`}>Support this cause <ArrowRight size={15} /></a></div></article>)}</div></section>
        <section className="section about-section"><div className="container about-grid"><div className="about-photo"><img src={about} alt="Illustration of solidarity: Indian women bringing their bangled hands together" loading="lazy" /><div className="since-badge"><strong>Seven women.</strong><span>One shared purpose. Since 1998.</span></div></div><div className="about-content"><div className="eyebrow section-kicker">About GWE NGO India</div><h2 className="section-title">Small beginnings.<br />A lifelong commitment.</h2><p>In the year 1998, we, seven women, having passion in social service formed an organization by name “Glorious Women Empowerment”.</p><p>We are all women members and belong to backward and downtrodden communities. Our society was registered and started activities for the upliftment of the quality of life of the downtrodden communities particularly women and children.</p><p>We focus women and children but do activities to other vulnerable, disadvantaged, deprived sections, who are poor and in need of help and assistance.</p><Button asChild className="donate-button"><Link to="/about-us">More About Us <ArrowRight size={16} /></Link></Button></div></div></section>
        <section className="section container"><div className="section-header"><div><div className="eyebrow section-kicker">Our Values</div><h2 className="section-title">The heart of everything we do.</h2></div></div><div className="values-grid">{values.map(v => <div key={v.title}><div className="value-icon"><v.icon size={23} strokeWidth={1.5} /></div><h3>{v.title}</h3><p>{v.text}</p></div>)}</div></section>
        <section className="section testimonial-section"><div className="container"><div className="eyebrow section-kicker">From Our Community</div><h2 className="section-title">Donor Speak</h2><div className="quotes"><div className="quote"><Quote size={27} /><blockquote>“I felt proud to be associated with a noble cause of helping needy destitute elderly people of our country India. Of course I know that my contribution is significantly very small. However, I am very happy at least I could do this much with god’s blessings. May god inspire every able citizen to come forward to contribute financially to this genuine GWE organization.”</blockquote><cite>Gangopadhyaya Chatterjee</cite><small>WASHINGTON D.C., USA</small></div><div className="quote"><Quote size={27} /><blockquote>“though my financial contribution is very little compared to the amount of work being done, but I am very glad and to some extent quiet content that I am trying to fulfill my dream, which has been with me since I started my college. I am very much grateful to GWE for giving me opportunity to contribute for the needy beneficiaries. I am proud being an Indian and more importantly a proud human being.”</blockquote><cite>Shwetha Roy</cite><small>SOFTWARE ENGINEER, UNITED KINGDOM</small></div></div></div></section>
        <section className="cta"><div className="container"><div className="eyebrow section-kicker justify-center">Women Empowerment</div><h2 className="section-title">There's nothing more valuable<br />than your support and love.</h2><p>Be it a man or a woman, every individual needs to be independent today.</p><Button asChild className="donate-button"><a href="#donate">Support GWE NGO India <Heart size={16} /></a></Button><a className="text-link ml-6" href={`${base}/women/women-empowerment/`}>Read More <ArrowRight size={15} /></a></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
