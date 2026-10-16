import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import eldersPhoto from "@/assets/gwe-elders-original.webp.asset.json";

export const Route = createFileRoute("/elders")({
  component: Elders,
  head: () => ({ meta: [
    { title: "Elders | GWE NGO India — Care and Support" },
    { name: "description", content: "GWE NGO India supports elders with nutritious meals, groceries and blankets, helping them live happily and in a healthy manner." },
    { property: "og:title", content: "Elders | GWE NGO India" },
    { property: "og:description", content: "Love, care, time and support for elders through nutritious meals, grocery support and blankets." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Elders() {
  return <>
    <SiteHeader activePage="Elders" />
    <main>
      <section className="about-page-heading"><div className="container">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ArrowRight size={14} /><span aria-current="page">Elders</span></nav>
        <div className="eyebrow section-kicker">Glorious Women Empowerment</div>
        <h1>Elders</h1>
      </div></section>
      <section className="section container">
        <div className="about-page-opening">
          <figure className="about-page-photo"><img src={eldersPhoto.url} alt="GWE NGO India care and support for elders in Kurnool" fetchPriority="high" /></figure>
          <div className="about-page-prose">
            <h2 className="section-title">Elders</h2>
            <p>It is very true to say that old age people need the same amount of love, care, time and support as children do. Both are in an age where they require someone to be on their side but usually, children do get that love and support whereas old aged people do not. One should understand that they do not want your money, but your support, time and love.</p>
            <ul className="elders-needs">
              <li>GWE NGO India is trying to make some efforts in order to help them live the rest of their lives happily and in a healthy manner. We think that at this age, the most important things that they need are-</li>
              <li>Nutritious meal so that they do not sleep empty stomach</li>
              <li>Grocery support so that they can keep themselves clean and away from diseases</li>
              <li>Blankets to cover themselves in cold weather</li>
              <li>Keeping the above things in mind we have come up with individual programs so that we can do as much as possible for our elders.</li>
            </ul>
            <Button asChild className="donate-button mt-8"><Link to="/" hash="donate">Support GWE NGO India <Heart size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}