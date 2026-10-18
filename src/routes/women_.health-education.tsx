import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import photo from "@/assets/gwe-health-education-original.webp.asset.json";

export const Route = createFileRoute("/women_/health-education")({
  component: HealthEducation,
  head: () => ({ meta: [
    { title: "Health Education | GWE NGO India" },
    { name: "description", content: "GWE NGO India provides health education for women and free health check-ups, raising awareness of diseases and their prevention." },
    { property: "og:title", content: "Health Education | GWE NGO India" },
    { property: "og:description", content: "GWE NGO India provides health education for women and free health check-ups, raising awareness of diseases and their prevention." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function HealthEducation() {
  return <>
    <SiteHeader activePage="Women" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/women">Women</Link><ArrowRight size={14} /><span aria-current="page">Health Education</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Health Education</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={photo.url} alt="GWE NGO India health education program" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Health Education</h2>
            <p>Health Education is very important in small districts especially where the chance of spreading diseases is even more and due to lack of resources they are not even able to take proper treatment if they acquire a disease. Therefore, GWE NGO India provides health education to women which is then passed on by them to other individuals in the district. We also conduct camps providing free health check-ups for individuals making them aware of the diseases, their cause and ill-effects and at the same time also telling them how to prevent them.</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
