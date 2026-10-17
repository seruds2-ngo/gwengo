import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import missionPhoto from "@/assets/gwe-mission-original.webp.asset.json";

export const Route = createFileRoute("/about-us_/mission")({
  component: Mission,
  head: () => ({ meta: [
    { title: "Our Mission | GWE NGO India — Glorious Women Empowerment" },
    { name: "description", content: "Our mission: to support the destitute financially and technically for socio-economic empowerment of women and nurturing children, in an enabling environment of dignity and equal participation." },
    { property: "og:title", content: "Our Mission | GWE NGO India" },
    { property: "og:description", content: "Socio-economic empowerment of women and nurturing children — how GWE NGO India works with the community." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Mission() {
  return <>
    <SiteHeader activePage="About Us" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/about-us">About Us</Link><ArrowRight size={14} /><span aria-current="page">Mission</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Our Mission</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={missionPhoto.url} alt="Glorious Women Empowerment mission — support for women and children" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Our Mission</h2>
            <p>To support destitute financially and technically for socio-economic empowerment of women and nurturing children; to create an enabling environment for empowered women to live with dignity and participate as equal partners in development.</p>
            <h2 className="section-title">What we do :</h2>
            <p>We do service to the community. We are reaching out to the marginalized in many ways. We work for the elevation of under privileged women, children and other vulnerable sections using holistic approach that addresses educational, environmental and economic welfare of the women, children and other vulnerable sections. We aim to facilitate the self-sufficiency of women, children and other vulnerable sections.</p>
            <h2 className="section-title">Best practices :</h2>
            <ul>
              <li>Gross root level planning need assessment through the stake holders</li>
              <li>Community participation involvement of beneficiaries in the implementation process</li>
              <li>Promotion of volunteers for implementation of the programs</li>
              <li>Periodical collection of data/reports & reviewing in Executive Committee/Annual General Body meetings</li>
              <li>Learn by experience and sharing</li>
            </ul>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
