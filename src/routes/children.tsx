import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import childrenPhoto from "@/assets/gwe-children-original.webp.asset.json";

export const Route = createFileRoute("/children")({
  component: Children,
  head: () => ({ meta: [
    { title: "Children | GWE NGO India — Education and Care" },
    { name: "description", content: "GWE NGO India supports children with education material, sponsorship, school uniforms and day care, helping them grow and reach the heights of success." },
    { property: "og:title", content: "Children | GWE NGO India" },
    { property: "og:description", content: "Education material, sponsorship, school uniforms and day care for children in need." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Children() {
  return <>
    <SiteHeader activePage="Children" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><span aria-current="page">Children</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Children</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={childrenPhoto.url} alt="GWE NGO India education support for children in Kurnool" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Children</h2>
            <p>Children are the most innocent souls on earth, neither do they harm others, nor do they differentiate between people. All they know is how to enjoy life and be happy. How can we leave these innocent souls in grief? We all should come together to help them grow in their lives, build a career, be the future of our country. Therefore, GWE NGO India has come up with few programs which in some way can help them-</p>
            <ul className="elders-needs">
              <li>Education material for children so that they can also enjoy studies like others.</li>
              <li>Sponsorship for children to help them study and get a better career.</li>
              <li>School uniforms so that they can follow the rules and regulations of the school and at the same time can keep themselves clean and healthy.</li>
              <li>Day Care for poor children from working families who do not get the care they deserve. These programs have been designed to help these sweet little children grow and reach the heights of success.</li>
            </ul>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
