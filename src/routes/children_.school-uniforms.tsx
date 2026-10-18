import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import photo from "@/assets/gwe-school-uniforms-original.webp.asset.json";

export const Route = createFileRoute("/children_/school-uniforms")({
  component: SchoolUniforms,
  head: () => ({ meta: [
    { title: "School Uniforms | GWE NGO India" },
    { name: "description", content: "GWE NGO India provides school uniforms for children from low-income families so they can attend school with confidence." },
    { property: "og:title", content: "School Uniforms | GWE NGO India" },
    { property: "og:description", content: "GWE NGO India provides school uniforms for children from low-income families so they can attend school with confidence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function SchoolUniforms() {
  return <>
    <SiteHeader activePage="Children" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/children">Children</Link><ArrowRight size={14} /><span aria-current="page">School Uniforms</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>School Uniforms</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={photo.url} alt="GWE NGO India school uniforms program" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">School Uniforms</h2>
            <p>We all know that every school has its own uniform, parents with low family income somehow send their children to schools but due to lack of money cannot but them a school uniform due to which either the children have to get a scolding in school or if they manage to buy one dress, they have to wear it the whole week leading to infections due to dirtiness.</p>
            <p>GWE NGO India therefore provides children with the school uniform so that they can go school without any fear of scolding and can keep themselves and their uniforms clean. You too can do your bit by providing them the needful.</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
