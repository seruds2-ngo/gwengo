import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import photo from "@/assets/gwe-education-material-original.webp.asset.json";

export const Route = createFileRoute("/children_/education-material")({
  component: EducationMaterial,
  head: () => ({ meta: [
    { title: "Education Material | GWE NGO India" },
    { name: "description", content: "GWE NGO India provides notebooks, pencils and other educational material to children in need, helping them continue their education." },
    { property: "og:title", content: "Education Material | GWE NGO India" },
    { property: "og:description", content: "GWE NGO India provides notebooks, pencils and other educational material to children in need, helping them continue their education." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function EducationMaterial() {
  return <>
    <SiteHeader activePage="Children" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><Link to="/children">Children</Link><ArrowRight size={14} /><span aria-current="page">Education Material</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Education Material</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={photo.url} alt="GWE NGO India education material program" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Education Material</h2>
            <p>“Every child deserves education no matter what!!!” Today, even families from rural areas understand the value of education and hence they send their children to schools, also due to our government’s initiative, education for poor does not cost much. But, children do need books, copies, pens, pencils, etc which they have to buy on their own but do not really have money for the same.</p>
            <p>Thinking of their futures, GWE NGO India, thought of helping them get educated, get the basic things they require to study so that every child gets a chance to be the future of India.</p>
            <p>GWE NGO India has been providing educational material like notebooks, pencils, geometric boxes, erasers, writing pads, uniforms, etc. to children We have covered 120 school children belonging to dalits, minorities and differentially-abled children. The impact is encouraging and dropout of children from school reduced.</p>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
