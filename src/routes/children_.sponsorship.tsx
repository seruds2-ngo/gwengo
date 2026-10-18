import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import photo from "@/assets/gwe-sponsorship-original.webp.asset.json";

export const Route = createFileRoute("/children_/sponsorship")({
  component: Sponsorship,
  head: () => ({ meta: [
    { title: "Sponsorship | GWE NGO India" },
    { name: "description", content: "GWE NGO India sponsors school and tuition fees for children who have the zeal to learn and grow in their careers." },
    { property: "og:title", content: "Sponsorship | GWE NGO India" },
    { property: "og:description", content: "GWE NGO India sponsors school and tuition fees for children who have the zeal to learn and grow in their careers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Sponsorship() {
  return <>
    <SiteHeader activePage="Children" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/children">Children</Link><ArrowRight size={14} /><span aria-current="page">Sponsorship</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Sponsorship</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={photo.url} alt="GWE NGO India sponsorship program" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Sponsorship</h2>
            <p>Although Government schools do provide almost free education to children but then the quality of education is not good enough to help them get a good career. Therefore, GWE NGO India has been sponsoring selected children who have the zeal to learn and grow in their careers by providing their school and tuition fees.</p>
            <p>So far we have sponsored 13 children and have sent them to corporate schools. Even you can sponsor the education of a child and be a part of their lives. We have been approached by many bright students seeking sponsorship but then due to lack of resources even we are helpless. You can sponsor these children and donate for their education and help them get a better life and career.</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
